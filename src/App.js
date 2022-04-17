import { Routes, Route } from "react-router-dom";

//local imports
import { Home, Error, Login } from "./components";
import Header from "./components/Header";

//end local imports
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
