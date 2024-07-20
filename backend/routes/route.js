import express from 'express';
import { uploadImage , downloadImage } from '../controller/image-controller.js'; // .js extension compulsory haui backend mein jarurui hai
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/upload',upload.single('file'),uploadImage)   // psot call hit ki thi frontend se upload pe yaha pe wahi recieve kiye 
router.get('/file/:fileId',downloadImage); // : ka matlab variable har image ke liye change hoga yeh
// params yaha pe fileId ke naam se hai
export default router;

//ek get api calll banai paregi jo iki db se path le aa jaye uskomein waha se api call mein bhej du and ya reponse mein bhej dunga and usko frontend mein bhejunga