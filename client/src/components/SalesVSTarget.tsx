import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getSalesVSTarget } from '../store/reducers/salesVSTarget.reducer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const SalesVSTarget = (props: any) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.salesVSTarget);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const chaseBarData = {
    labels: data.map((e: any) => e.productName),
    datasets: [
      {
        label: 'Expected Product Sell',
        data: data.map((e: any) => e.expectedSellProduct),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total Product Sell',
        data: data.map((e: any) => e.totalSellProduct),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  useEffect(() => {
    dispatch<any>(getSalesVSTarget());
  }, []);
  return (
    <div style={{ height: '500px' }}>
      <Bar
        style={{ width: '100%', height: '100%' }}
        options={options}
        data={chaseBarData}
      />
    </div>
  );
};
