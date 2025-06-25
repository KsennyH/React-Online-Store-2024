import './navigation-link.css';

type LinkNavHtader = {
    text: string,
    active?: string
}

const NavigationLink:React.FC<LinkNavHtader> = ({text, active}) => {
    let classNames = "navigation__link";
    if(active) {
        classNames = classNames += " navigation__link--active";
    }
    return (
        <li className="navigation__item"> 
            <a className={classNames} href="/"> 
                <span>{text}</span>
            </a>
        </li>
    );
}

export default NavigationLink;