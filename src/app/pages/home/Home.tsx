import { Hand } from "lucide-react";
import { motion, spring, transform } from "framer-motion";

export const Home = () => {

    const parentAnimation = {
        variantA: { scale: 1 },
        variantB: { scale: 1.30 },
    }

    const childAnimation = {
        variantA: { bottom: 0, right: 0, rotate: 0 },
        variantB: { top: 0, left: 0, rotate: 180 },
    }


    return (
        <div className="flex justify-center items-center flex-wrap bg-blue-300 min-h-screen m-auto">
            <h1 className="my-3">Home Page!</h1>
            <div className="text-center flex-wrap div-icons w-full flex justify-center items-center">
                <p className="w-full">Testing Icons</p>
                <Hand size={50} />
            </div>
            <div className="text-center div-animation w-full flex flex-wrap justify-center items-center">
                <p className="w-full">Testing Animation</p>
                <motion.div
                    className="w-60 h-60 bg-gray-400 rounded-full"
                    variants={parentAnimation}
                    initial="variantA"
                    whileHover="variantB"
                />
            </div>
            <div className="text-center div-animation w-full flex flex-wrap justify-center items-center">
                <p className="w-full">Second Animation Test, more complex</p>
                <motion.div
                    className="relative w-60 h-60 bg-gray-400 rounded-full"
                    variants={parentAnimation}
                    initial="variantA"
                    whileHover="variantB"
                >
                    <motion.div
                        className="absolute w-1/4 h-1/4 bottom-0 right-0 bg-gray-200 rounded-full"
                        variants={childAnimation}
                        transition={{
                            type: "spring",
                            damping: 4,
                            mass: 0.2,
                            stiffness: 150,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}