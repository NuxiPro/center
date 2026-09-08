# Architecture Backend et Flux de Donnees - NuxiPro Cloud

Ce document explique simplement comment circulent les informations dans le backend de NuxiPro Cloud, depuis la requete du client jusqu'a la base de donnees.

---

## 1. Vue d'ensemble des composants

* Client (Cloudflare Worker) : Execute l'application au plus pres de l'utilisateur (Edge) pour une vitesse maximale.
* Reverse Proxy (Nginx) : Le portier de l'infrastructure. Il recoit toutes les requetes publiques, gere la securite SSL/TLS et distribue le trafic.
* Backend (Hono / Bun) : Le coeur de l'application, code en TypeScript. Il contient les routes API et integre nativement Better Auth.
* Cache et Sessions (UpCloud Valkey) : Base de donnees en memoire ultra-rapide (compatible Redis) dediee a la gestion instantanee des jetons d'authentification et des sessions.
* Base de Donnees (UpCloud PostgreSQL) : La base de donnees principale ou sont stockees durablement les donnees metier (utilisateurs, taches Kanban, projets, etc.), manipulee via Drizzle ORM.

---

## 2. Flux de donnees etape par etape (Sequence 1 a 10)

Voici le parcours exact d'une requete HTTP securisee :

| Etape | Emetteur -> Destinataire | Description et Role |
| :---: | :--- | :--- |
| 1 | Client -> TLS/Internet | Le client envoie une requete (ex: ouvrir un tableau Kanban). |
| 2 | TLS -> Reverse Proxy (Nginx) | Nginx recoit la requete chiffree, dechiffre le trafic et applique les regles de securite. |
| 3 | Reverse Proxy -> Backend (Hono) | Nginx transmet la requete au serveur Hono. Hono la passe immediatement a Better Auth. |
| 4 | Better Auth -> Valkey (UpCloud) | Better Auth interroge la base Valkey en TLS pour verifier si le cookie/token de session est valide en cache. |
| 5 | Valkey -> Better Auth (Backend) | Valkey repond en quelques millisecondes pour valider l'identite de l'utilisateur. |
| 6 | Backend -> PostgreSQL (UpCloud) | L'utilisateur etant authentifie, Drizzle ORM va chercher les cartes du Kanban dans PostgreSQL via TLS. |
| 7 | PostgreSQL -> Backend | PostgreSQL renvoie les donnees demandees au serveur Hono. |
| 8 | Backend -> Reverse Proxy | Hono assemble la reponse JSON et la renvoie a Nginx. |
| 9 | Reverse Proxy -> TLS | Nginx chiffre la reponse et la mep pour l'envoi sur le reseau. |
| 10 | TLS -> Client (Cloudflare) | Le client recoit la reponse finale et affiche les donnees a l'utilisateur. |

---

## 3. Optimisation : Le role du cache (Cache Hit)

L'avantage majeur de Valkey reside dans l'optimisation des performances :

* Si la session est valide (Cache Hit) : L'authentification prend environ 1 ms sans solliciter PostgreSQL.
* Pour les requetes d'authentification simples (ex: verifier isLoggedIn) : Le flux s'arrete a l'etape 5 et renvoie directement la reponse (Etapes : 1 -> 2 -> 3 -> 4 -> 5 -> 8 -> 9 -> 10), evitant tout appel inutile a la base de donnees principale.

---

## 4. Securite (Zero Trust Transit)

Toutes les liaisons externes et distantes sont chiffrees via TLS/SSL :
1. Entre le Client et Nginx (HTTPS / TLS public).
2. Entre le Backend et Valkey (TLS prive cloud).
3. Entre le Backend et PostgreSQL (TLS prive cloud).
