declare global {
  interface Window {
    hcaptcha?: {
      reset: () => void;
    };
  }
}

export {};
