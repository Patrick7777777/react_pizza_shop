import React from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";

import {Header} from './components'
import {Home, Cart} from './pages';
import {Route} from "react-router-dom";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
    const dispatch  = useDispatch();

    React.useEffect(() => {
        // ПЕРЕНЕСТИ В РЕДАКС И ПОДКЛЮЧИТЬ REDUX-THUNK
        // СЛЕДИТЬ ЗА ФИЛЬТРАЦИЕЙ И СОРТИРОВКОЙ И ПОДСТАВЛЯТЬ ПАРАМЕТРЫ В URL ИЗ REDUX
        // СДЕЛАТЬ ИММИТАЦИЮ ЗАГРУЗКИ ПИЦЦ (КОТОРОАЯ ЕСТЬ В CSS И В PIZZABLOCK)
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
            dispatch(setPizzas(data));
        });
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>);
}

export default App;