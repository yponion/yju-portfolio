import { useEffect, useState } from "react";

/** 화면의 너비가 767 이하이면 true를 반환 */
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