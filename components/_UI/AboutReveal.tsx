"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
};

export default function Reveal({
    children,
    className = "",
    threshold = 0.15,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        // لو المتصفح لا يدعم IntersectionObserver
        if (!("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`${className} ${visible ? "is-visible" : ""}`}
        >
            {children}
        </div>
    );
}