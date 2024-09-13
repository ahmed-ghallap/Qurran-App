import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
};
const Footer = () => {
    return (
        <footer className="bottom-nav " >
            <nav className="container">
                <ul className="nav  justify-content-between align-items-center ">
                    <li  className="nav-item"><a href="" class="nav-link">
                        <Link to="book">
                            <i className="fa-solid fa-book-quran fa-2xl"></i>
                        </Link>
                    </a></li>
                    <li className="nav-item"><a href="" class="nav-link">
                        <Link to="zeker">
                            <i className="fa-solid fa-moon fa-2xl"></i>
                            <i className="fa-solid fa-sun fa-2xl"></i>
                        </Link>
                    </a></li>
                    <li className="nav-item"><a href="" class="nav-link">
                        <Link to={"why"} >
                            <i className="fa-solid fa-question fa-flip-horizontal fa-2xl"></i>
                        </Link>
                    </a></li>
                    <li className="nav-item"><a href="" class="nav-link">
                        <Link to={"assma"}>
                            <i className="fa-solid fa-umbrella fa-2xl"></i>
                        </Link>
                    </a></li>
                </ul>
            </nav>
        </footer>
    )
}


export default Layout;