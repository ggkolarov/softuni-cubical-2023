const router = require('express').Router();
const authService = require('../service/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try { 
        const token = await authService.login(username, password);
        console.log(token);

        res.cookie('auth', token, {httpOnly: true})
    } catch(err) {
        console.log(err); // throw invalid username or password
    }

    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.redirect('/404');
    }

    const existingUser = await authService.getUserByUsername(username);

    if(existingUser) {
        res.redirect('/404');
    }

    const user = await authService.register(username, password); // if we don't have such an user we register

    console.log(user);

    res.redirect('/login');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
});

module.exports = router;