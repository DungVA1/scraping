import scrapingCaller from '../lib/3rd-caller';
import bookExtrator from '../lib/book-elm-extractor';
import categoryExtractor from '../lib/category-elm-extractor';

const paramsValidator = (offset) => {
  const pageNumber = parseInt(offset, 10);
  if (!pageNumber) {
    throw new Error('pageNumber should be a number and has value > 0');
  }

  return pageNumber;
};

const scraper = async (pageNumber) => {
  const validPageNumber = paramsValidator(pageNumber);
  const api = process.env.API || 'books.toscrape.com';
  const url = `http://${api}/catalogue/page-${validPageNumber}.html`;
  let response;
  let $;
  try {
    $ = await scrapingCaller.get(url);
  } catch (err) {
    response = err;
  }
  if ($) {
    response = {
      book: bookExtrator($),
      category: categoryExtractor($),
    };
  }

  return response;
};

export default scraper;
