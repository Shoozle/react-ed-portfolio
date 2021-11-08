
import { useLocation } from "react-router"
import { useEffect } from "react"

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])

    return null;
}

export default ScrollTop;