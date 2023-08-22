import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <div>
            <p className={'text-center text-ashColor'}>
                React Starter made with
                <Link to={'https://vitejs.dev/'} className={'text-primaryColor'}> Vite </Link>
                and
                <Link to={'https://tailwindcss.com/'} className={'text-primaryColor'}> Tailwind CSS </Link>
                by -
                <Link to={'https://joyontokarmakar.netlify.app'} className={'text-primaryColor'}> Joyonto Karmakar.</Link></p>
        </div>
    )
}
