import './App.scss';
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import History from "./Components/History/History";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Cards/>
            <History/>
        </div>
    );
}

export default App;
