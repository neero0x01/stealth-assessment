import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getSalesByCategory } from '../../store/reducers/salesByCategory.reducer';
import {useAppDispatch, useAppSelector} from "../../store/hooks";

ChartJS.register(ArcElement, Tooltip, Legend);
export const SalesByCategory = () => {
  const { data } = useAppSelector((state) => state.salesByCategory);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch<any>(getSalesByCategory());
  }, []);

  const pieData = {
    labels: data && data.map((e: any) => e.categoryName),
    datasets: [
      {
        data: data && data.map((e: any) => e.number),
        backgroundColor: [
          '#EC6B56',
          '#FFC154',
          '#47B39C',
          '#49C0FF',
          '#AF7E7E',
          '#2935A6',
        ],
        borderColor: ['#ffffff'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {data && pieData && (
        <Pie
          height={'500px'}
          options={{ maintainAspectRatio: false }}
          data={pieData}
        />
      )}
    </div>
  );
};
