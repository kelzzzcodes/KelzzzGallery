import React, { useState, useEffect } from 'react'
import { ImageCard, UploadForm } from '../components'

import useFirestore from '../useFirestore'

const Gallery = () => {
  const { docs: images, isLoading } = useFirestore()

  const [photos, setPhotos] = useState(images)
  const [query, setQuery] = useState('')

  console.log()

  useEffect(() => {
    const getPhotos = (query) => {
      if (!query) {
        setPhotos(images)
      } else {
        setPhotos(images.filter((image) => image.userEmail.includes(query)))
      }
    }
    getPhotos(query)
  }, [images, query])

  return (
    <div className=" mt-20 bg-stone-900">
      <UploadForm />

      <div className=" w-full px-12 flex">
        <form className="w-[300px] flex ">
          <input
            type="search"
            className=" h-9 flex px-2"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="px-2 bg-blue-500">Search</button>
        </form>
      </div>

      <div>
        {query ? (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 p-8 gap-4">
            {photos.map((item) => (
              <div className="flex justify-center p-8 text-4xl">
                <div className="handle flex flex-col items-center gap-2 bg-gray-50 border-2 border-gray-200 overflow-hidden rounded-md">
                  <img
                    src={item.imageUrl}
                    className="object-cover max-h-[15rem] w-full"
                    alt="item1"
                  />
                  <div className="flex flex-1 h-32">
                    <p className="text-xl flex  items-center justify-center flex-col gap-2  p-2">
                      <span>Uploaded By</span>
                      {item.userEmail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ImageCard />
        )}
      </div>
    </div>
  )
}

export default Gallery
