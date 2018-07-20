import express from 'express';
import bodyParser from 'body-parser';
import route from './router/scraping-router';

export default {
  init() {
    return new Promise((resolve, reject) => {
      try {
        const app = express();
        const bastRouter = process.env.RESTFUL_BASE_ROUTER || '';
        app.use(bastRouter, route);
        app.use(bodyParser.json());

        app.listen(3000, () => {
          console.log('Application is listening at 3000 ...');
          resolve(app);
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
