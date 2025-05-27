import * as motion from "motion/react-client";

export default function EnterAnimation({children, duration}: {children: React.ReactNode,duration: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: duration, bounce: 0.5 },
      }}
      className="flex items-center justify-center" // center the icon
    >
      {children}
    </motion.div>
  );
}
