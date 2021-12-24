import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderDetail } from '../../components/Summary/types';

export interface Payload{
    data: OrderDetail,
    isLoading: boolean
}

export const initialState: Payload = {
    data: {
        id: '',
        prescription_image: '',
        status: '',
        patient: {
            id: 0,
            full_name: '',
            phone_number: ''
        },
        address: {
            id: '',
            postal_code: '',
            latitude: 0,
            longitude: 0,
            first_line: '',
            second_line: '',
            note: '',
            province: '',
            district: '',
            sub_district: ''
        }
    },
    isLoading: false
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getDetailFetch(state: Payload, action: PayloadAction<string, string>) {
        state.isLoading = true;
    },
    getDetailSuccess(state: Payload, action: PayloadAction<OrderDetail>) {
        state.data = action.payload;
        state.isLoading = false;
    },
    getDetailError(state: Payload) {
        state.isLoading = false;
    },
  },
});

export const { getDetailFetch, getDetailSuccess, getDetailError } = detailSlice.actions

export default detailSlice.reducer