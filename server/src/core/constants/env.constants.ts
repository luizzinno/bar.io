export const envConstants = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  isMockRepository: process.env.MOCK_REPOSITORY === 'true',
  MONGODB_URI: process.env.MONGODB_URI,
  isProduction: process.env.NODE_ENV === 'production',
  MONGO_EXPIRATION_TIME: process.env.MONGO_EXPIRATION_TIME,
};
