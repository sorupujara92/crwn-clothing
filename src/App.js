import Home from "./routes/home/home.component";
import { Route,Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.comonent";
import SignIn from "./routes/authentication/authentication.component";
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
        <Route path="authentication" element={<SignIn />}/>
      </Route>
    </Routes>
  );
}

export default App;