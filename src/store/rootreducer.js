import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";  
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const rootReducer = combineReducers({
    user : userReducer,
    categories : categoriesReducer,
    cart : cartReducer
})

const persistConfig = {
    key : 'root',
    storage,
    blacklist : ['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);