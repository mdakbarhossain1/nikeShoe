import headerLogo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constant/index.js';


const Nav = () => {
    return (
        <header className="padding-x py-8 w-full absolute z-10">
            <nav className="flex items-center justify-between max-container">
                <a href="#">
                    <img src={headerLogo} alt="Nike-Logo" width={130} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((items) => (
                            <li key={items.label}>
                                <a href={items.href} className="font-montserrat leading-normal text-lg text-slate-gray">{items.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger" width={26} height={26} />
                </div>
            </nav>
        </header>
    )
}

export default Nav