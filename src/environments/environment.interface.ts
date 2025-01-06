// src/environments/environment.interface.ts
export interface EnvironmentConfig {
    production: boolean;
    emailjsconfig: {
      publicKey: string;
      serviceId: string;
      templateId: string;
    };
  }