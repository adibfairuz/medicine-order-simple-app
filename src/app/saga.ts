import { call, put, takeEvery } from 'redux-saga/effects'
import axios, {AxiosResponse} from 'axios'
import { api } from '../config/urls'
import { getListError, getListFetch, getListSuccess } from './slice/List'
import { OrderList } from './components/Card/types'
import { OrderDetail } from './components/Summary/types'
import { getDetailError, getDetailFetch, getDetailSuccess } from './slice/Detail'
import { PayloadAction } from '@reduxjs/toolkit'

type ListResponse = AxiosResponse<OrderList[]>
type DetailResponse = AxiosResponse<OrderDetail>

function* getList(){
    try {
        const res: ListResponse = yield call(() => axios.get(api))
        const data: OrderList[] = res.data;
        yield put(getListSuccess(data))
    } catch {
        yield put(getListError())
    }
}

function* getDetail(action: PayloadAction){
    try {
        const res: DetailResponse = yield call(() => axios.get(`${api}/${action.payload}`))
        const data: OrderDetail = res.data;
        yield put(getDetailSuccess(data))
    } catch {
        yield put(getDetailError())
    }
}

function* orderSaga(){
    yield takeEvery(getListFetch, getList)
    yield takeEvery<any>(getDetailFetch, getDetail)
}

export default orderSaga