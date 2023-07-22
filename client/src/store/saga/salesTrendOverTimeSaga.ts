import { put, takeEvery } from "redux-saga/effects";
import { getSalesTrendOverTimeData } from "../reducers/salesTrendOverTime.reducer";

function* getSalesTrendOverTime() {
    yield put<any>(getSalesTrendOverTimeData());
}

export function* watchGetProfitAndRevenue() {
    yield takeEvery('getSalesTrendOverTime', getSalesTrendOverTime);
}