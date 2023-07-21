import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ageCountReducer, {
  getAgeCount,
} from '../store/reducers/ageCount.reducer';
import { ClassificationType } from 'typescript';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('node-fetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            getAgeCountData: {
              teen: 10,
              adult: 20,
              senior: 5,
            },
          },
        }),
    })
  )
);

describe('Age Count Slice', () => {
  it('should fetch age count data and update the state correctly', async () => {
    const store = mockStore({ data: [], loading: false, error: null });

    await store.dispatch<any>(getAgeCount());

    const actions = store.getActions();
    expect(actions[0].type).toBe(getAgeCount.pending.type);
    expect(actions[1].type).toBe(getAgeCount.fulfilled.type);
    expect(actions[1].payload).toEqual({
      teen: 10,
      adult: 20,
      senior: 5,
    });

    const updatedState = ageCountReducer(
      { data: [], loading: false, error: null },
      actions[1]
    );
    expect(updatedState.data).toEqual({
      teen: 10,
      adult: 20,
      senior: 5,
    });
    expect(updatedState.loading).toBe(false);
    expect(updatedState.error).toBeNull();
  });
});
