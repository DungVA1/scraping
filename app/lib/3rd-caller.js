import request from 'request-promise';
import cheerio from 'cheerio';

export default {
  /**
   * Function call to API or 3rd party with method GET
   * @param {String} url need to request
   * @return {Promise} result turned from 3rd party
   */
  get(url) {
    const options = {
      transform: body => cheerio.load(body, {
        normalizeWhitespace: false,
      }),
      uri: url,
    };

    return request.get(options);
  },
};
