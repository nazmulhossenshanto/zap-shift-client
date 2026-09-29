import Logo from "../shared/Logo/Logo"
import authImg from '../assets/new/authImage.png'
import { Outlet } from "react-router"
 
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <Logo></Logo>
        <div className="flex items-center">
            {/* form */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            {/* image */}
            <div className="flex-1">
    <img src={authImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AuthLayout