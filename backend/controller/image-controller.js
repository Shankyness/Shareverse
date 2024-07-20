
import File from "../models/file.js";



export const uploadImage = async (req,res) =>{        // yeh callback function jo ki route ki jayegai yeh do cheez deti hai request and reponse jo bhi api request aatihai frontend se woh aati hai request ke andar
// database mein data ko save karna hai
const fileObj = {
    path:req.file.path,
    name:req.file.originalname
}



try{
   const filepathindb = await File.create(fileObj);
   res.status(200).json({path:`http://localhost:8000/file/${filepathindb._id}`}) // image downlaod karne ke liye chahiye ek server kya collection mein storage ka naam hai and usme sabka unique id hota hai 
}catch(error){
    console.error(error.message);
    res.status(500).json({error : error.message})

}
}

export const downloadImage = async (req,res) =>{
    // ijmage ko download karne ke liye pahle usko download karna parega
    try{
      const file = await File.findById(req.params.fileId); // mongodb se fetch kar raha hai
      file.downloadContent++;
      //updated download content isko save karan parega 
      await file.save();
      //download karne ke liye function hotra hai
      res.download(file.path,file.name);
    }catch(error){
     console.error(error.message);
     return res.status(500).json({error:error.message}); // 200 succes 500 error
    }
}






// req ka ek object banake database mein bhejna hai and then ek request bhejna hai 
// middleware ka use karn aparega kyunki file nhi aayi jo bheja tha request mein shayad aisa hi hoga


// file ko request ke andar daalne k eliye middleware ka use kiye hai 

// mainly tumhara middleware aayi hui request pe hi kaam karta hia aayi hui request ko mmodify karna ya uske seath jo bhi karna database mein daalna yeh sab
// File isiliye importnt kiye hai ki jo ki filescehma apne database mein jaa rhi hai usko match karn ahia request wale object se 
// filecreate validat bhi kar dega db mein jo scehma hai and request se ho aaya 
// and create bhi kar dega 