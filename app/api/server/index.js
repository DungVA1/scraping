import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import route from './router/scraping-router';

export default {
  init() {
    return new Promise((resolve, reject) => {
      try {
        const app = express();
        const bastRouter = process.env.RESTFUL_BASE_ROUTER || '';
        app.use(cors());
        app.use(bastRouter, route);
        app.use(bodyParser.json());

        app.listen(3001, () => {
          console.log('Application is listening at 3001 ...');
          resolve(app);
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
