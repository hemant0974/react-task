import { Route, Routes } from "react-router-dom";
import Home from "./modules/home";
import IpoDetails from "./modules/ipo-details";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/ipo-details" Component={IpoDetails} />
    </Routes>
  );
};

export default App;
