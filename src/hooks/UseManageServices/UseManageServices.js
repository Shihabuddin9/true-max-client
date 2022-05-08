import { useEffect, useState } from "react"

const useManageServices = () => {
    const [bestDeals, setBestDeals] = useState([])
    useEffect(() => {
        fetch('https://warm-wildwood-23363.herokuapp.com/viewCar')
            .then(res => res.json())
            .then(data => setBestDeals(data))
    }, [])
    return [bestDeals, setBestDeals]
}
export default useManageServices;