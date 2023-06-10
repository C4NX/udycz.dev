import { motion } from "framer-motion";

interface TypewriterEffectProps {
  children: string | string[];
  writeBarColor?: string;
  writeBarDelay?: number;
  writeBar?: boolean;
}

export default function TypewriterEffect({ children, writeBar = false, writeBarColor = "white", writeBarDelay = .2 }: TypewriterEffectProps) {
  return (
    <motion.div style={{
      display: 'flex',
    }}>
      <motion.span
        style={{
          display: 'inline',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: 0,
          letterSpacing: '.15em',
          maxWidth: 'fit-content',
        }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 3.5, type: 'steps', steps: 10 }}
      >
        {children}
      </motion.span>
      {writeBar && (<motion.span style={{
        borderRight: `0.1em solid ${writeBarColor}`,
      }}

        animate={{
          opacity: [0, 1],
        }}

        transition={{
          repeatDelay: writeBarDelay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}

      />)}
    </motion.div>
  );
}