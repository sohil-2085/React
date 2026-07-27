import EffectHook from "./components/EffectHook/EffectHook";
import Home from "./components/HomePage/Home";
import StateHook from "./components/UseStateHook/StateHook";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/statehook" element={<StateHook />}/>
        <Route path="/useeffect" element={<EffectHook />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
