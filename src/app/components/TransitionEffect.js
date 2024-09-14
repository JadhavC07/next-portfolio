import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* First layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-30 bg-lime-600"
        initial={{ y: "-100%" }} // Start from above the viewport
        animate={{ y: "0%" }} // Slide to the viewport
        exit={{ y: "100%" }} // Exit to below the viewport
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Second layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-20 bg-lime-500"
        initial={{ y: "-100%" }} // Start from above the viewport
        animate={{ y: "0%" }} // Slide to the viewport
        exit={{ y: "100%" }} // Exit to below the viewport
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Third layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-10 bg-lime-300"
        initial={{ y: "-100%" }} // Start from above the viewport
        animate={{ y: "0%" }} // Slide to the viewport
        exit={{ y: "100%" }} // Exit to below the viewport
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
