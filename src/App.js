import { Routes, Route } from "react-router-dom";

//local imports
import { Home, Error, Loading, Login } from "./components";
import Header from "./components/Header";

//end local imports
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
