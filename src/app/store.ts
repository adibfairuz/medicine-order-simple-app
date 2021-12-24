import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import List from './slice/List';
import Detail from './slice/Detail';
import orderSaga from './saga';
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    List,
    Detail
  },
  middleware: [saga]
});

saga.run(orderSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
