import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
    )


    useEffect(() => {
        function handleReSize() {
            setIsMobile(window.innerWidth <= breakpoint);
        }

        window.addEventListener("resize", handleReSize);
        return () => window.removeEventListener("resize", handleReSize)
    }, [breakpoint]);

    return isMobile;
}