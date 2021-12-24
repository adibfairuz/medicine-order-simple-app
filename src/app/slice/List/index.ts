import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderList } from '../../components/Card/types/index';

export interface Payload{
    data: Array<OrderList>,
    isLoading: boolean
}

export const initialState: Payload = {
    data: [],
    isLoading: false
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getListFetch(state: Payload) {
        state.isLoading = true;
    },
    getListSuccess(state: Payload, action: PayloadAction<Array<OrderList>>) {
        state.data = action.payload;
        state.isLoading = false;
    },
    getListError(state: Payload) {
        state.isLoading = false;
    },
  },
});

export const { getListFetch, getListSuccess, getListError } = listSlice.actions

export default listSlice.reducer