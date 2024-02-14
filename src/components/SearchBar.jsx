import { useState } from "react";
export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <p>{inputValue}</p>
      <hr />
    </div>
  )
}