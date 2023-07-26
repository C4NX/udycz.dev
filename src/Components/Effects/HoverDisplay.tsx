import { motion } from "framer-motion";

interface HoverDisplayProps {
    children: JSX.Element;
    duration?: number;
    defaultOpacity?: number;
}

/**
 * A component that displays on hover
 */
export default function HoverDisplay({ children, duration = 0.5, defaultOpacity = 0 }: HoverDisplayProps) {
    return (
        <motion.div whileHover={{ opacity: 1, }} initial={{ opacity: defaultOpacity }} transition={{ duration: duration }}>
            {children}
        </motion.div>
    );
}