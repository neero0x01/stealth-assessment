import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import genderChartReducer, {
  getGenderChart,
} from '../../store/reducers/genderChart.reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('node-fetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            getGenderData: {
              male: 4,
              female: 5,
              other: 1,
            },
          },
        }),
    })
  )
);

describe('Gender Chart Slice', () => {
  it('should fetch Gender data and update the state correctly', async () => {
    const store = mockStore({ data: [], loading: false, error: null });

    await store.dispatch<any>(getGenderChart());

    const actions = store.getActions();
    expect(actions[0].type).toBe(getGenderChart.pending.type);
    expect(actions[1].type).toBe(getGenderChart.fulfilled.type);
    expect(actions[1].payload).toEqual({
      male: 4,
      female: 5,
      other: 1,
    });

    const updatedState = genderChartReducer(
      { data: [], loading: false, error: null },
      actions[1]
    );
    expect(updatedState.data).toEqual({
      male: 4,
      female: 5,
      other: 1,
    });
    expect(updatedState.loading).toBe(false);
    expect(updatedState.error).toBeNull();
  });
});
