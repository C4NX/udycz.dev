import { motion } from "framer-motion";

interface HoverZoomProps {
    children: JSX.Element;
    factor?: number;
}

/**
 * A component that zooms on hover
 */
export default function HoverZoom({ children, factor = 1.1 }: HoverZoomProps) {
    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: factor }}
        >
            {children}
        </motion.div>
    );
}