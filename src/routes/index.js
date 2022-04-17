const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/userslikeyou', (req, res) => {
    res.render('users-like-you.html');
});


router.get('/aboutthis', (req, res) => {
    res.render('about-this.html');
});



module.exports = router;