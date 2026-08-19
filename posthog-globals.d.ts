declare global {
  interface Window {
    posthog?: import("@posthog/types").PostHog;
  }
}
export {};
