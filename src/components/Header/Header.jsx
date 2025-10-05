import { Outlet } from 'react-router-dom';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className={'flex flex-col items-center justify-center gap-4 mt-5'}>
            <div>
                <p className={'text-4xl'}>Blog with Dastan</p>
            </div>
            <div className={'w-full h-0.5 bg-gray-200'}></div>
            <div>
                <Link to={'/'}><p className={'text-xl'}>Archive</p></Link>
            </div>
            <div className={'w-full h-0.5 bg-gray-200'}></div>
            <Outlet />
        </div>
    )
}
export default Header