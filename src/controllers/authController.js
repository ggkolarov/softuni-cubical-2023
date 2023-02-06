const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const {username, password, repeadPassword} = req.body;

    if (password !== repeadPassword) {
        return res.status(404).end();
    }

    
});

module.exports = router;