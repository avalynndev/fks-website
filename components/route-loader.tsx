"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-background z-[9999]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="w-14 h-14 border-4 border-muted-foreground border-t-primary rounded-full animate-spin"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
