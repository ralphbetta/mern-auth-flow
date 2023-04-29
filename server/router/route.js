
const express = require('express');
const { register, login, getUser, generateOTP, verifyOTP, createResetSession, resetPassword, updateUser } = require('../controller/appController');


const router = express.Router();
router.post('/register', register);
router.post('/registerMail', (req, res)=> res.json(req.body));
router.post('/authenticate', (req, res)=> res.json(req.body));
router.post('/login', login);


router.get('/users/:username', getUser);
router.get('/generateOTP', generateOTP);
router.get('/verifyOTP', verifyOTP);
router.get('/createResetSession', createResetSession);

router.put('/updateUser', updateUser  );
router.put('/resetPassword', resetPassword);

module.exports = router;

