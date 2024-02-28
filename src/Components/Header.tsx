import { Link } from "react-router-dom"
import useOnlineStatus from "../Hooks/useOnlineStatus"
import { useSelector } from "react-redux"

const Header = () => {

    const checkOnline = useOnlineStatus()

    const store = useSelector((store:any) => store?.cart.items)

    return(
        <div className="flex justify-between p-4 bg-slate-400 items-center">
            <div>
                <h4>Logo</h4>
            </div>
            <div className="flex justify-between"> 
            <h5 className="px-3">Online Status:-{checkOnline ? <span>{String.fromCodePoint(0x2705)}</span>: <span>{String.fromCodePoint(0x1F534)}</span>}</h5>
                <h5 className="px-5"><Link to='/'>Home</Link></h5>
                <h5 className="px-5"><Link to='/about'>About Us</Link></h5>
                <h5 className="px-5"><Link to='/contact'>Contact Us</Link></h5>
                <h5 className="px-5"><Link to='/grocery'>Instamart</Link></h5>
                <h5 className="px-5"><Link to='/cart'>Cart-{store.length}</Link></h5>
                <button className="bg-gray-600 px-3 py-1 rounded-lg">Login</button>
            </div>
        </div>
    )
}

export default Header