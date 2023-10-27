import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const Store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
