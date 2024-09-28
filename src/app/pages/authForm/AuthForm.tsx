import { motion } from "framer-motion";
import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleCard = () => {
        setIsLogin(!isLogin);
    };

    const cardVariants = {
        enter: {
            opacity: 1,
            x: 0,
            rotateY: 0,
        },
        exit: (isLogin: boolean) => ({
            opacity: 0,
            x: isLogin ? 100 : -100, // Sai para a direita ou para a esquerda
            rotateY: 180,
        }),
    };

    return (
        <div className="w-full h-screen bg-lime-300 flex items-center justify-center">
            <motion.div
                className="relative w-80 h-96 bg-red-50 perspective-default"
                initial="exit" // Começa na saída
                animate="enter" // Animação de entrada
                exit="exit" // Animação de saída
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                custom={isLogin} // Passa o estado atual para o exit
            >
                <motion.div
                    className={`absolute inset-0 backface-hidden`}
                    key={isLogin ? "login" : "register"} // Key para forçar re-render
                    variants={cardVariants}
                >
                    {isLogin ? <Login toggleCard={toggleCard} /> : <Register toggleCard={toggleCard} />}
                </motion.div>
            </motion.div>
        </div>
    );
};
