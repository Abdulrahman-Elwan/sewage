"use client";

import { useEffect, useRef, useState } from "react";

type ServiceRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right";
};

export default function ServiceReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: ServiceRevealProps) {
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
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`service-reveal service-reveal-${direction} ${visible ? "is-visible" : ""
                } ${className}`}
            style={{
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
