"use client";

import { useEffect, useRef, useState } from "react";

type GalleryRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function GalleryReveal({
    children,
    className = "",
    delay = 0,
}: GalleryRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

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
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`gallery-reveal ${visible ? "is-visible" : ""
                } ${className}`}
            style={{
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}