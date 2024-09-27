interface IRegisterProps {
    toggleCard: () => void;
}



export const Register: React.FC<IRegisterProps> = ({toggleCard}) =>{

    
    
    return(
        <div>
            Register

            
            <button onClick={toggleCard} className="mt-2 text-blue-500 underline"> Login </button>
        </div>
    )
}