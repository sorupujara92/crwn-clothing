import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategory = createSelector(
[selectCategoryReducer],
(categoriesReducer) => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector([selectCategory],(categories) => categories
.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);