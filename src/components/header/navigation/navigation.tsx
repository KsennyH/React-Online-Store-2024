import NavigationLink from './navigation-link/navigation-link';

function Navigation() {
    return (
        <div className="navigation"> 
            <ul className="navigation__list">
                <NavigationLink text="Главная" active="true"/>
                <NavigationLink text="Каталог" />
                <NavigationLink text="Контакты" />
            </ul>
        </div>
    );
}

export default Navigation;