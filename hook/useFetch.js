import React, { useEffect, useState } from 'react'
// import { RAPID_API_KEY } from '@env'
import axios from 'axios'
const API_KEY = '87891753d6msh2b593f0c92e6224p1aa79ejsn6cd0d851de08'

const useFetch = (endpoint, query={
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.request(options)
            setData(res?.data?.data)
            setIsLoading(false)
        } catch (error) {
            alert(error)
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    return { data, isLoading, error, refetch }
}

export default useFetch