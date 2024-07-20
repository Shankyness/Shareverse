import multer from 'multer';

const upload = multer ({dest : 'uploads'});   //destination uploads kar dia gaya hai 

export default upload;


// isme doput middleare and kya kaam kar raha really


// pehle file nhi ban raha tha request mein nhi aa raha tha thne m,iddleware ka sue karke woh file aa gya 
// request ke andar