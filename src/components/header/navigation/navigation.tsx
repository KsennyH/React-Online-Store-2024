import { NavLink } from 'react-router-dom';

function Navigation() {

    const navlist = [
        {
            link: "Каталог",
            path: "/",
        },
        {
            link: "Сервис",
            path: "/services",
        },
        {
            link: "Контакты",
            path: "/contacts",
        },
    ];

    return (
        <div className="navigation"> 
            <ul className="navigation__list">
                {
                    navlist.map((navElem, i) => <li key={i} className="navigation__item"><NavLink to={navElem.path} className="navigation__link">{navElem.link}</NavLink></li>)
                }
            </ul>
        </div>
    );
}

export default Navigation;