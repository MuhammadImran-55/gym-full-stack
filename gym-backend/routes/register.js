let express=require('express');
const { formInsert, productInsert, askAI } = require('../controller/controller');
let axios=require('axios');

const router = express.Router();

// POST /register
  router.post('/ask-ai',askAI)

router.post("/form", formInsert);

router.post('/product',productInsert)

module.exports=router;
