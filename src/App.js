import React from 'react';
import Header from './components/header';
import Form from './components/form';
import Country from './components/country';
import './App.css';

const counry_url ="https://restcountries.eu/rest/v2/name/";//основную часть url перенести в константу


class App extends React.Component{
  
  state = {
    official: "",
    official_native: "",
    capital: "",
    currency: "",
    language: "",
    flag: "",
    error: "",
  };

   

  gettingCountry = async (event) =>{
    event.preventDefault();
    
    const country = event.target.elements.country.value;
    const api_url = await fetch(`${counry_url}${country}`);
    
    const data = await api_url.json();
    console.log(data);
  
    const a = data[0]; //data[0]  лучше один раз вынести в переменную и использовать её для всех остальных полей чем каждый раз обращаться к 0му элементу массива

    if(api_url.status !== 404){
      this.setState({
        official : a.name,
        official_native : a.nativeName,
        capital: a.capital,
        currency: a.currencies[0].name,
        language:a.languages[0].name,
        flag: a.flag,
        error: ""
      });
    } else{
      this.setState({
        official : "",
        official_native : "",
        capital: "",
        currency: "",
        language: "",
        flag: "",
        error: "You don't enter the actual country!"
      });
    }
  }

  
render(){
  const  t = this.state; //один раз выносим в переменную и используем для всех остальных полей
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Form dataForm = {this.gettingCountry} />
        <Country 
        official = {t.official}
        official_native = {t.official_native}
        capital = {t.capital}
        currency = {t.currency}
        language = {t.language}
        flag = {t.flag}
        error= {t.error}
        />

      </div>
    </div>
  );
};
}


export default App;
