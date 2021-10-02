import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home' });
});
/* GET about me page. */
router.get('/about', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'About me' });
});
/* GET projects page. */
router.get('/projects', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Services' });
});
/* GET contact me page. */
router.get('/contact', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Contact me' });
});
export default router;
