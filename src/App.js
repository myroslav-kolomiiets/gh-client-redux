import React from 'react';
import Input from './components/Input/Input';
import CardContainer from './components/CardContainer/CardContainer';
import Pagination from './components/Pagination/Pagination';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Input/>
            </header>
            <main>
                <CardContainer/>
            </main>
            <footer className="App-footer">
                <Pagination/>
            </footer>
        </div>
    );
}

export default App;
