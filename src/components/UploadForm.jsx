
import React, { useState } from 'react';
import useStorage from '../useStorage';

const UploadForm = () => {

   const [selectedFile, setSelectedFile] = useState(null);

   const  {startUpload, progress} = useStorage()
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(selectedFile){
     startUpload(selectedFile);
    }

setSelectedFile(null)
  }

  return (
    <div className="flex items-center justify-center text-white py-16  ">
      <form onSubmit={handleSubmit} className="flex  flex-col gap-4 items-center justify-center">
     <div>
        <label className="flex items-center justify-center px-4 py-2  bg-orange-400 text-white rounded-lg cursor-pointer">
        <span>Select a File</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .gif" // You can specify the allowed file types here
        />
      </label>
      {selectedFile && (
        <p className="mt-2">Uploading file: {selectedFile.name}</p>
      )}
     </div>
     <button className={ `bg-blue-500 p-4 rounded-md ` }>Upload</button>
      </form>
    </div>
  )
}

export default UploadForm
