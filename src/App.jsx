import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';


function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout(){
    if(muscles.length <1){
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    
    setWorkout(newWorkout)
    window.location.href = '#workout'
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-slate-950 text-white text-sm: text-base">
      <Hero />
      <Generator 
      poison={poison} 
      setPoison={setPoison}
      muscles = {muscles}
      setMuscles = {setMuscles}
      goal = {goal} 
      setGoal = {setGoal}
      updateWorkout={updateWorkout}
        />
      {workout && <Workout workout={workout} />}
    </main>
  );
}



export default App;
