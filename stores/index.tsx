import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer from '../Reducers/TodoList';
import FilterListReducer from '../Reducers/FilterList';

const rootReducer = {
  TodoList: TodoListReducer,
  FilterList: FilterListReducer,
};

function myLoggerMiddleware(store) {
  return (next) => (action) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', store.getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myLoggerMiddleware),
});
export default store;
