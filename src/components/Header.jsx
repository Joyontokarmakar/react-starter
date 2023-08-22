import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.png'
import vite from '../assets/vite.png'
import plus from '../assets/plus.jpg'
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <div>
            <div className={'flex justify-center items-center gap-x-3 py-3'}>
                <img src={react} alt="" className={'w-14'}/>
                <img src={plus} alt="" className={'w-3'}/>
                <img src={vite} alt="" className={'w-14'}/>
                <img src={plus} alt="" className={'w-3'}/>
                <img src={tailwind} alt="" className={'w-14'}/>
            </div>
            <div className={'flex justify-center items-center gap-x-3 bg-deepAshColor py-1'}>
                <Link to={'/'} className={'nav-item'}>Home</Link>
                <Link to={'/profile'} className={'nav-item'}>Profile</Link>
            </div>
        </div>
    )
}
