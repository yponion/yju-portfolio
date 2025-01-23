import { useState, useEffect } from "react";

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