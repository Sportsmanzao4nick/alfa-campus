import './Header.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__logo-container">
                <a className="header__logo" href="http://localhost:3000/">A-Store</a>
            </div>
            <div className="header__menu-container">
                <a className="header__menu-links" href="#">
                    <span className="header__menu-burger"></span>
                    меню</a>
            </div>
        </div>
    )
}

export default Header;