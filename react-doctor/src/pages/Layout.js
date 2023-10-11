import Header from "../component/header/HeaderComp"
import Footer from "../component/footer/Footer"
import { Outlet } from "react-router-dom" ; 


const Layout = ({ props }) => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout ;