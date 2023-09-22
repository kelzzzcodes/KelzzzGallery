import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './firebase.config'

const useFirestore = () => {
  const [docs, setDocs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const getData = async () => {
      try {
        const q = query(
          collection(db, 'images'),
          orderBy('createAt', 'desc'),
        )
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images=[];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createAt = doc.data().createAt.toDate();
            const userEmail = doc.data().userEmail;
            images.push({imageUrl, createAt, userEmail})
          });
          setDocs(images)
          setIsLoading(false)
        })


      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }

    }
    
    getData();

  }, [])

  return {
    docs, isLoading
  }
}

export default useFirestore
