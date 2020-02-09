import { useState, useEffect } from 'react'

export const useFetch = url => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                console.log('useEffect is fetching url: '+url)
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                const data = await response.json()
                console.log('useEffect has data: ' + data)
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        getData()
    }, [url])
    // console.log('got blogs:' + data)
    return {data, error, loading}
}