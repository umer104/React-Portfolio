import { useLocation } from 'react-router-dom';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Stairs from './Stairs';

function StairsAnimations({ children }) {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <AnimatePresence mode='wait'>
            <div key={pathname}>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 
                pointer-events-none z-40 flex'>
                <Stairs />
                </div>

                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
                    }}
                    className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
                />
            </div>
        </AnimatePresence>
    );
}

export default StairsAnimations;
