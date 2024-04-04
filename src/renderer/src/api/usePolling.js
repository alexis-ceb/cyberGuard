import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import api from './api'

const usePolling = (url) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await api.get(url)
      setData(response.data)
    } catch (error) {
      console.error('Error at trying to get data', error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  useEffect(() => {
    fetchData()

    const intervalId = setInterval(fetchData, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [url])

  return data
}

export default usePolling
