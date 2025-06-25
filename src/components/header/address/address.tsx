import placeholderIcon from './placeholder.svg';
import phoneIcon from './phone.svg';
import mailIcon from './mail.svg';

function Address() {
    return (
        <div className="address-information"> 
            <ul className="address-information__list">
                <li className="address-information__item"> 
                    <a className="address-information__link" href="contacts.html">
                        <img className="address-information__icon" src={placeholderIcon} alt="Logo"/>
                        <span className="address-information__label">Иваново, ул. Сакко, 54</span>
                    </a>
                </li>
                <li className="address-information__item">
                    <a className="address-information__link" href="tel:84932134581">
                        <img className="address-information__icon" src={phoneIcon} alt="Logo"/>
                        <span className="address-information__label">Тел. 8 (4932) 134-581</span>
                    </a>
                </li>
                <li className="address-information__item">
                    <a className="address-information__link" href="mailto:motomirIvanovo@email.com">
                        <img className="address-information__icon" src={mailIcon} alt="Logo"/>
                        <span className="address-information__label">motomirIvanovo@email.com</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Address;