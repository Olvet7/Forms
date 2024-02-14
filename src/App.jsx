import "./App.css";
import { useState } from "react";
import { LangSwircher } from "./components/LangSwitcher";
import { SearchBar } from "./components/SearchBar";
import { Coffee } from "./components/Coffe";
import { LoginForm } from "./components/LoginForm/LoginForm";


export default function App() {
  
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeSize] = useState("sm") 

  const handleSizeChange = (e) => {
    setCoffeSize(e.target.value);
  }

  const handleLoginSubmit = (loginData) => {
    console.log("login data: ", loginData);
    console.log(loginData.login);
  }

  return (
    <>
    <LoginForm onSubmit={handleLoginSubmit}/>
    <Coffee coffeeSize={coffeeSize} handleSizeChange={handleSizeChange}/>
    <LangSwircher value={lang} onSelect={setLang}/>
    <h2>Please login to your account!</h2>
    <SearchBar />
    </>
  );
}
