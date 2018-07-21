
/**
 * Get value from pure HTML
 * @param {DOM} $ HTML DOM
 */
const extractor = ($) => {
  const elms = $('section>div>ol');
  const responses = [];
  elms.find('li').each((i, elm) => {
    responses.push({
      bookName: $(elm).find('article>h3>a').html(),
      category: 'Not Found', /* TODO: I can't find any element has category */
      image: $(elm).find('article>div[class=image_container]>a>img').attr('src'),
      rateStars: $(elm).find('article>p').attr('class').split(' ')[1],
      price: $(elm).find('article>div[class=product_price]>p[class=price_color]').html(),
      status: $(elm).find('article>div[class=product_price]>p')
                    .next()
                    .attr('class')
                    .split(' ')[0],
    });
  });

  return responses;
};

export default extractor;
