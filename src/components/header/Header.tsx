import './Header.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__logo-container">
                <a className="header__logo">A-Store</a>
            </div>
            <div className="header__menu-container">
                <a className="header__menu-links">
                    <span className="header__menu-burger"></span>
                    меню</a>
            </div>
        </div>
    )
}

export default Header;