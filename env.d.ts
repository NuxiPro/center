declare module 'starlight-agentready';
declare module 'virtual:starlight/components/EditLink';
declare module 'virtual:starlight/components/LastUpdated';
declare module 'virtual:starlight/components/Pagination';
declare module 'virtual:starlight/user-config';
declare module '@astrojs/starlight/props';


/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
