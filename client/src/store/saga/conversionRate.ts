import { put, takeEvery } from "redux-saga/effects";
import { getConversionRate as getConversionRateRequest } from '../reducers/conversionRate.reducer';

function* getConversionRate() {
    yield put<any>(getConversionRateRequest());
}

export function* watchGetAgeCount() {
    yield takeEvery('getConversionRate', getConversionRate);
}