const express = require('express');

const {registerUser, loginUser, getMe, UpdateUserProfile} = require('../controllers/authController.js');
const {protect} = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/me').get(protect, getMe).put(protect, UpdateUserProfile);

module.exports = router;