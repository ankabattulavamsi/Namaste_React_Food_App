import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [checkOnline, setCheckOnline] = useState(true)

   
   useEffect(() => {
    window.addEventListener('online', () => {
        setCheckOnline(true)
    })

    window.addEventListener('offline', () => {
        setCheckOnline(false)
    })
   },[])

    return checkOnline
}

export default useOnlineStatus