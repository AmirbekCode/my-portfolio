import "./counter.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect , useState} from "react";



export default function Counter(countt) {



  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count,18, { duration: 5 });

    return animation.stop;
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
}
