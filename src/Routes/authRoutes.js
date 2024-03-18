import express from 'express';
import { registerUser, loginUser, getUserData } from '../Controllers/authController.js';
import { getHotelData } from '../controllers/hotelController.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-user', getUserData)

export default router;
