import Home from "./routes/home/home.component";
import { Route,Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.comonent";
import SignIn from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utils/firebase/firebase.util";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "./store/categories/category.action";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.util";
const App = () => {

  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
},[dispatch])
  return (
    <Routes>  
       <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path="authentication" element={<SignIn />}/>
        <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  );
}

export default App;