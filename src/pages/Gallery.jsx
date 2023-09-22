import React from 'react'
import { ImageCard, UploadForm } from '../components'


const Gallery = () => {
  return (
    <div className=' mt-20 bg-stone-900'>
      <UploadForm/>

        <ImageCard/>

    </div>
  )
}

export default Gallery