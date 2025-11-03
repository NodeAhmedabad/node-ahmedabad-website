type Environment = 'development' | 'production';
type Switch = 'ON' | 'OFF';

const config = {
  NODE_ENV: process.env.NODE_ENV as Environment,
  ENV_TYPE: process.env.NODE_ENV as Environment,
  MAINTENANCE_MODE: process.env.MAINTENANCE_MODE as Switch,
  SUPABASE_URL: process.env.SUPABASE_URL as string,
  SUPABASE_API_KEY: process.env.SUPABASE_API_KEY as string,
} as const;

export default config;
