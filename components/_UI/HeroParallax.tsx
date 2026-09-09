"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type HeroParallaxProps = {
    children: React.ReactNode;
    className?: string;
};

export default function HeroParallax({
    children,
    className = "",
}: HeroParallaxProps) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const sx = useSpring(mx, {
        stiffness: 60,
        damping: 20,
    });

    const sy = useSpring(my, {
        stiffness: 60,
        damping: 20,
    });

    const rotateX = useTransform(sy, [-40, 40], [3, -3]);
    const rotateY = useTransform(sx, [-40, 40], [-3, 3]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!wrapRef.current) return;

        const rect = wrapRef.current.getBoundingClientRect();

        mx.set(e.clientX - rect.left - rect.width / 2);
        my.set(e.clientY - rect.top - rect.height / 2);
    }

    function reset() {
        setEnabled(false);
        mx.set(0);
        my.set(0);
    }

    return (
        <div
            ref={wrapRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setEnabled(true)}
            onMouseLeave={reset}
            className={className}
        >
            <motion.div
                style={enabled ? { rotateX, rotateY } : undefined}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    );
}