interface ILoginProps {
    toggleCard: () => void;
}


export const Login: React.FC<ILoginProps> = ({ toggleCard }) => {
    return (
        <div>
            Login
            <button onClick={toggleCard} className="mt-2 text-blue-500 underline">Não tem conta? Cadastre-se</button>
        </div>
    )
}