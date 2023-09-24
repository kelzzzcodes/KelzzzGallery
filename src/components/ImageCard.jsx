import React, { useEffect, useState } from 'react'
import useFirestore from '../useFirestore'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const ImageCard = () => {
  const { docs: images, isLoading } = useFirestore()








  return (
    <div className="w-full p-4 flex flex-col ">

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 p-8 gap-4">
        {images.map((image) => (
          <div className="handle flex flex-col items-center gap-2 bg-gray-50 border-2 border-gray-200 overflow-hidden rounded-md">
            <img
              src={image.imageUrl}
              className="object-cover max-h-[15rem] w-full"
              alt="image1"
            />
            <div className="flex flex-1 h-32">
              <p className="text-xl flex  items-center justify-center flex-col gap-2  p-2">
                <span>Uploaded By</span>
                {image.userEmail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCard
