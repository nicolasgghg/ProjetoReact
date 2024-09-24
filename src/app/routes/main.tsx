import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Home } from "../pages/main";


export const AppRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Home />}></Route>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>        
    )
}