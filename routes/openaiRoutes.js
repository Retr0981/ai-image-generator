const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', (res,req) => {
    res.statusCode(200).json({
        success:  true,
    });
});

module.exports = router;