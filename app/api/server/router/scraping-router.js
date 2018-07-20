import express from 'express';
import scraper from '../../../service/book-scraper';

const router = new express.Router();

router.get('/book', async (req, res) => {
  const { offset, category } = req.query;
  try {
    res.status(200).json(await scraper(offset, category));
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Server Internal Error');
  }
});

export default router;
