import { Outlet, Link } from "react-router-dom";
import Footer from '../Footer'

export default function Nav() {
    return (
        <>
            <div>
                <nav className="bg-black text-white flex flex-row justify-between text-2xl lg:px-60 py-2">
                    <h1 className="inline">William Weiland</h1>
                    <ul className='flex flex-row gap-3'>
                        <li>
                            <Link to='/'>About</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex flex-col items-center py-10'>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}