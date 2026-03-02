import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition(e);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.clientX - 4, y: mousePosition.clientY - 4 }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
            <motion.div
                className="cursor-ring"
                animate={{ x: mousePosition.clientX - 20, y: mousePosition.clientY - 20 }}
                transition={{ type: "spring", bounce: 0, duration: 0.1 }}
            />
        </>
    );
};

export default Cursor;
