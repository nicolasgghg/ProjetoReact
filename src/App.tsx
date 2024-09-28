import { Outlet } from "react-router-dom"
import { NavBar } from "./app/shared/components/navBar/NavBar"


export const App = ()=>{
    return(
        <div className="App">
            <NavBar />
            <Outlet />
        </div>
    )
}