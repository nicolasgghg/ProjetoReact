import { Link } from "react-router-dom"

interface INavBarPages {
    title: string;
    path: string;
}

const pages: INavBarPages[] = [
    { title: "Home", path: "/" },
    { title: "Dashboard", path: "/DashBoard" },
    { title: "Random Tests", path: "/Test" }
]



export const NavBar: React.FC = () => {
    const generateLinkPages = () => {
        return pages.map(page => (
            <Link
                key={page.title}
                to={page.path}
                className="hover:bg-red-300 p-2"
            >
                {page.title}
            </Link>
        ));
    };


    return (
        <nav className="mb-4 flex justify-between items-center border-b-4 border-red-100 p-4">
            <div className="">
                <p>Nav Bar</p>
            </div>
            <div className="flex justify-around items-center gap-4">
                {generateLinkPages()}
            </div>
        </nav>
    )
}