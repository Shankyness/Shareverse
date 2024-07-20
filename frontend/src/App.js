import {useRef,useState,useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';
import solImage from './sol.jpg';


function App() {
  const[file,setFile]=useState('');
  const[result,setresult]=useState('');
  const fileInputRef = useRef();
  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file); // puri file bhejni hai

        const response = await uploadFile(data); // upload file ekl asynchronouis function hai naa ki toh api.js file mein delkho async laga rakhai hai siiliye iss mein await lagan parega
        setresult(response.path);
      }
    }
    getImage();
  }, [file])


  const onUploadClick =()=>{
    fileInputRef.current.click();
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Link copied to clipboard!");
  };

  return (
    <div className = 'container'>
     <img src={solImage} alt='banner' />
     <div className='wrapper'>
     <h1>ShareVerse</h1>
     <p>Upload and share the download link.</p>
     <button onClick={()=>onUploadClick()}>Upload</button>
     <input type="file" 
      ref = {fileInputRef}
      style = {{display : 'none'}}
      onChange={(e)=>setFile(e.target.files[0])}
     />
     {result && (
          <>
            <div className="link-row">
              <input type="text" value={result} readOnly />
            </div>
            <div className="link-row">
              <button onClick={copyToClipboard}>Copy Link</button>
              <a href={result} download>
                <button>Download File</button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
