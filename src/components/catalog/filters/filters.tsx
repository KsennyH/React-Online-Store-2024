function Filters() {
    return(
        <form className="filter js-filter" action="/">
            <div className="filter__item">
            <div className="toggle-block"> 
                <h5 className="toggle-block__title filter-title">Цена (руб)</h5>
                <div className="toggle-block__body"> 
                <div className="toggle-block__inputs">
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="price-input-0" min="500" max="999999" placeholder="500"/>
                    </label>
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="price-input-1" min="500" max="999999" placeholder="999999"/>
                    </label>
                </div>
                <div className="toggle-block__range" id="price-slider"></div>
                </div>
            </div>
            </div>
            <div className="filter__item">
            <div className="checkbox-block"> 
                <h5 className="checkbox-block__title filter-title">Техника</h5>
                <ul className="checkbox-block__list">
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Мотоциклы</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Мопеды</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Скутеры</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Квадроциклы</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Гидроциклы</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Снегоходы</span>
                    </label>
                </li>
                </ul>
            </div>
            </div>
            <div className="filter__item"> 
            <div className="checkbox-block"> 
                <h5 className="checkbox-block__title filter-title">Тип мотоцикла</h5>
                <ul className="checkbox-block__list">
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Спортивный</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Спортивный</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Дорожный</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Чоппер</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Туристический</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Эндуро</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Питбайк</span>
                    </label>
                </li>
                </ul>
            </div>
            </div>
            <div className="filter__item">
            <div className="checkbox-block"> 
                <h5 className="checkbox-block__title filter-title">Бренд</h5>
                <ul className="checkbox-block__list">
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Baltmotors</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Stels</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Wels</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Irbis</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Racer</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">MotoLand</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Lifan</span>
                    </label>
                </li>
                </ul>
            </div>
            </div>
            <div className="filter__item">
            <div className="toggle-block"> 
                <h5 className="toggle-block__title filter-title">Объём двигателя (куб. см)</h5>
                <div className="toggle-block__body"> 
                <div className="toggle-block__inputs">
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="size-input-0" min="50" max="1000" placeholder="50"/>
                    </label>
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="size-input-1" min="50" max="1000" placeholder="1000"/>
                    </label>
                </div>
                <div className="toggle-block__range"></div>
                </div>
            </div>
            </div>
            <div className="filter__item">
            <div className="radio-block"> 
                <h5 className="radio-block__title filter-title">Пробег (км)</h5>
                <ul className="radio-block__list"> 
                <li className="radio-block__item">
                    <label className="radio">
                    <input className="radio__input" name="mileage" type="radio"/><span className="radio__custom custom-radio"></span><span className="radio__name">С пробегом </span>
                    </label>
                </li>
                <li className="radio-block__item">
                    <label className="radio">
                    <input className="radio__input" name="mileage" type="radio"/><span className="radio__custom custom-radio"></span><span className="radio__name">Без пробега </span>
                    </label>
                </li>
                </ul>
            </div>
            </div>
            <div className="filter__btn"> 
                <button className="btn btn--small" type="submit">Показать</button>
            </div>
            <div className="filter__reset"> 
                <button className="filter__reset-btn">Сбросить настройки</button>
            </div>
        </form>
    );
}

export default Filters;