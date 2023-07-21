import { render, screen } from '@testing-library/react';
import { AgeCount } from '../customer-demographics/AgeCount';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import { OccupationData } from '../customer-demographics/OccupationData';
import { TopProductSell } from './TopProductSell';

jest.mock('react-chartjs-2', () => ({
  Bar: () => <div data-testid='radar-chart-mock-occupation'></div>,
}));

test('renders Top Products chart', () => {
  render(
    <Provider store={store}>
      <TopProductSell />
    </Provider>
  );
});
