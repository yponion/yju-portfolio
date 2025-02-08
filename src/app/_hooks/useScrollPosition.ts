import { useState, useEffect } from "react";

/** 스크롤의 현재 위치와 이전 위치를 반환 */
export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState({
        currentY: 0,
        previousY: 0,
    });
    useEffect(() => {
        let lastScrollY = 0;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollPosition({
                currentY: currentScrollY,
                previousY: lastScrollY,
            });
            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return scrollPosition;
}