import './App.scss';
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import History from "./Components/History/History";
import BlackBlock from "./Components/BlackBlock/BlackBlock";
import Dishes from "./Components/Dishes/Dishes";
import Menu from "./Components/Menu/Menu";

const App = () => {
    return (
        <div className="App">

            <div className="app-container">
                <Header/>
                <Cards/>
                <History/>
                <BlackBlock/>
                <Dishes />
                <Menu/>
            </div>
        </div>
    );
}

export default App;
