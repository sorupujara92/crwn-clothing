import { createAction } from "../../utils/reducers/reducers.util"
import { CATEGORIES_ACTION_TYPE } from "./category.types";
export const setCategories = (categorieArray) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES,categorieArray); 
