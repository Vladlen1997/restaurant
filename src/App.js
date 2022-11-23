import './App.scss';
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import History from "./Components/History/History";
import BlackBlock from "./Components/BlackBlock/BlackBlock";
import Dishes from "./Components/Dishes/Dishes";
import Menu from "./Components/Menu/Menu";
import Comment from "./Components/Comment/Comment";
import Gallery from "./Components/Gallery/Gallery";
import Cook from "./Components/Cook/Cook";
import Footer from "./Components/Footer/Footer";
import React from "react";
import CartPage from "./Components/CartPage/CartPage";

const App = () => {

    const [cartOpened, setCartOpened] = React.useState(false);


    return (
        <div className="App">

            <div className="app-container">
                <Header onClickCart={() => setCartOpened(true)}/>
                <Cards/>
                <History/>
                <BlackBlock/>
                <Dishes />
                <Menu/>
                <Comment/>
                <Gallery/>
                <Cook/>
                <Footer/>
                {cartOpened && <CartPage />}
            </div>
        </div>
    );
}

export default App;
