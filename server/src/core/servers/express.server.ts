import express from 'express';
import { envConstants } from 'core/constants';
import { redirectHttpsMiddleware } from './middlewares';

export const createApp = () => {
  const app = express();

  if (envConstants.isProduction) {
    app.use(redirectHttpsMiddleware);
  }

  return app;
};
