import { Routes, Route } from "react-router-dom";

//local imports
import { Home, Error, Login, PrivateRoute , AuthWrapper} from "./components";

//end local imports
function App() {
  
  return (
    <AuthWrapper>
      <Routes>
        <Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </AuthWrapper>
  );
}

export default App;
