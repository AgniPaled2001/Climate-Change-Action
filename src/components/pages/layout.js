import { Outlet,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Layout=()=>{
    return(
        <>
        <div style={{color:"black", backgroundColor:"greenyellow"}}>
                <nav >
                    <div className="container-fluid">
                        <Link to='/Home' className="m-5 p-3">Home</Link>
                        <Link to='/login' className="m-5 p-3">Login</Link>
                        <Link to='/blog'className="m-5 p-3">Blogs</Link>
                        <Link to='/contact' className="m-5 p-3">Contact</Link>
                        <Link to='/contact' className="m-5 p-3">Agni</Link>
                    </div>
                    </nav>
                    <div class="container-fluid row p-5">
<div class="col-md-5 m-4 order-md-2 p-5 ">
<img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png" class="container-fluid "/>
</div>
<div class="col-md-5 m-4 order-md-1 p-5">
    <h1>CLIMATE CHANGE ACTION</h1>
     <h1 class="text-danger">Hey, I am AGNI P </h1>
     <p class="text-secondary">I am a Front-End Developer & Mentor.</p>
     <button class="btn bg-danger text-light" >KNOW MORE</button>
     <button class="btn bg-danger text-light" >KNOW MORE</button>
</div>
        </div>
        <Outlet/>
        </div>
        </>
    )
}
export default Layout;