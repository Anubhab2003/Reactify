import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar 
        mode="single" 
        selected={date} 
        onSelect={setDate} 
        className="rounded-md border" 
      /> 
    </>
  );
}

export default App;