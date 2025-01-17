import { useEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window && window.innerWidth <= 767) setIsMobile(true)
        const handleResize = () => window.innerWidth > 767 ? setIsMobile(false) : setIsMobile(true)
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
}