import Logo from "./logo/logo";
import Address from "./address/address";
import Actions from "./actions/actions";
import Navigation from "./navigation/navigation";
import Search from './search/search';

function Header() {

    return (
        <header className="header">
            <div className="top-header">
                <div className="container">
                    <div className="top-header__inner">
                        <div className="top-header__logo">   
                            <Logo />
                        </div>
                        <div className="top-header__actions">
                            <div className="top-header__form">
                                <Search />
                                <Actions />
                            </div>
                        </div>
                        <div className="top-header__info">
                            <Address />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header"> 
                <div className="container"> 
                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default Header;