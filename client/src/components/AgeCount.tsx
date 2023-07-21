import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { getAgeCount } from '../store/reducers/ageCount.reducer';
import {useAppDispatch, useAppSelector} from "../store/hooks";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const AgeCount = (props: any) => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.ageCount);

  useEffect(() => {
    dispatch<any>(getAgeCount());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const radarData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(data),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: '500px' }} data-testid='radar-chart-mock'>
      <Radar style={{ width: '100%', height: '100%' }} data={radarData} />
    </div>
  );
};
