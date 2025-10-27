type Environment = 'development' | 'production';

const config = {
  NODE_ENV: process.env.NODE_ENV as Environment,
  ENV_TYPE: process.env.NODE_ENV as Environment,
  MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
} as const;

export default config;
