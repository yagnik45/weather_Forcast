import React from 'react';
import Header from './components/Header';
import TodoItem from './components/Todoitem';
import Button from './components/Button';
import './style.css';
import Button1 from './components/Button1';
import Card from './components/card';
import Input from './components/input';
import { useWeather } from './weather';

const App = () => {
  const weather=useWeather();
  console.log(weather);
  return (
    // <div className='todo-container'>
    //   <Header title="Todo App" />
    //   <TodoItem text="Eat"/>
    //   <TodoItem text="Code"/>
    //   <TodoItem text="Play"/>
    //   <TodoItem text="Sleep"/>
    //   <TodoItem text="Reading"/>
    //   <Button/>
    // </div>
    <div className='app'>
    <h1>Weather Forcast</h1>
    <Input/>
    <Button1 onClick={weather.fetchdata} value="Search" />
    <Card/>
    </div>
  );
};

export default App;