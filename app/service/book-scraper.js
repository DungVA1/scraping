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

const scraper = async (pageNumber, category, init) => {
  const api = process.env.API || 'books.toscrape.com';
  let url;
  if (pageNumber) {
    const validPageNumber = paramsValidator(pageNumber);
    url = `http://${api}/catalogue/page-${validPageNumber}.html`;
  } else {
    url = `http://${api}/catalogue/${category}`;
  }

  let response;
  let $;
  try {
    $ = await scrapingCaller.get(url);
  } catch (err) {
    response = err;
  }
  if ($ && init) {
    response = {
      book: bookExtrator($),
      category: categoryExtractor($),
    };
  } else {
    response = {
      book: bookExtrator($),
    };
  }

  return response;
};

export default scraper;
