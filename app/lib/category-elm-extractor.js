const extractor = ($) => {
  const elms = $('aside>div[class=side_categories]>ul>li>ul');
  const responses = [];
  elms.find('li').each((i, elm) => {
    responses.push({
      cateName: $(elm).find('li>a').html().trim(),
      url: $(elm).find('li>a').attr('href'),
    });
  });

  return responses;
};

export default extractor;
