
const express = require('express');


const router = express.Router();

router.post('/register', (req, res)=> res.json(req.body));
router.post('/registerMail', (req, res)=> res.json(req.body));
router.post('/authenticate', (req, res)=> res.json(req.body));
router.post('/login', (req, res)=> res.json(req.body));


router.get('/users/:username', (req, res)=> res.json(req.body));
router.get('/generateOTP', (req, res)=> res.json(req.body));
router.get('/verifyOTP', (req, res)=> res.json(req.body));
router.get('/createResetSession', (req, res)=> res.json(req.body));

router.put('/updateUser', (req, res)=> res.json(req.body));
router.put('/resetPassword', (req, res)=> res.json(req.body));

module.exports = router;

