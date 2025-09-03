const express = require('express');
const router = express.Router();
const{body} = require('express-validator');
const { handleUserRegister, handleUserLogin, getUserProfile, logoutUser } =require('../controllers/user');
const { authUser } = require('../middlewares/auth');
router.post('/register',[
  body('email').isEmail().withMessage('Invalid Email'),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
],handleUserRegister);


router.post('/login',[
  body('email').isEmail().withMessage('Invalid email'),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
],handleUserLogin);

router.get('/profile',authUser,getUserProfile);
router.get('/logout',authUser,logoutUser)
module.exports=router;