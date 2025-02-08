import { useEffect, useRef, useState } from "react";

interface Props {
    onece?: boolean;
    point?: number;
}

/** 요소가 뷰포트의 point 지점을 기준으로 밑으로 가면 active true 반환 */
export const useScrollTrigger = ({ onece = false, point = 0.8 }: Props = {}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const y = ref.current.getBoundingClientRect().y;
            if (y < window.innerHeight * point) {
                setActive(true);
                if (onece) window.removeEventListener("scroll", handleScroll);
            } else {
                setActive(false);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return { ref, active };
}