import { motion } from 'framer-motion';

export default function AnimatedButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#012227' }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-6 py-3 bg-primary text-white rounded-[15px] cursor-pointer font-semibold focus:outline-none text-xl"
            onClick={onClick}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <motion.div
                className="absolute inset-0 border-2 border-primary"
                initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }}
                whileHover={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    width: '100%',
                    height: '100%'
                }}
                transition={{
                    opacity: { duration: 0.3 },
                    width: { duration: 0.8, ease: "easeInOut" },
                    height: { duration: 0.8, ease: "easeInOut" }
                }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
