import './MainPage.css';

const MainPage = () => {
    return (
        <div className="mainpage__container">
            <a className="mainpage__component made-in-alpha" href="http://localhost:3000/madeinalpha">
                <h3 className="mainpage__header">Сделано в Альфе</h3>
            </a>
            <a className="mainpage__component own-design" href="http://localhost:3000/own-design">
                <h3 className="mainpage__header">Свой дизайн</h3>
            </a>
        </div>
    )
}

export default MainPage;