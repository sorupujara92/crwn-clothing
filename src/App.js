import Home from "./routes/home/home.component";
import { Route,Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.comonent";
const Shop = () => {
  return (
    <div>
      <h1>I am here shop</h1></div>
  );
}
const App = () => {
  return (
    <Routes>  
       <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
      </Route>
    </Routes>
  );
}

export default App;