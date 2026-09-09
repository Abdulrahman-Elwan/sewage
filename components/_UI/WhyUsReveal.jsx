"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function WhyUsReveal({
    children,
    className = "",
    delay = 0,
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function WhyUsStagger({
    children,
    className = "",
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1, 0.12)}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function WhyUsItem({
    children,
    className = "",
}) {
    return (
        <motion.div
            variants={fadeUp}
            className={className}
        >
            {children}
        </motion.div>
    );
}