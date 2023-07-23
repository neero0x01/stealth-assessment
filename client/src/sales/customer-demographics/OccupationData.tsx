import React, {useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {getOccupation} from '../../store/reducers/occupation.reducer';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const OccupationData = (props: any) => {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector((state) => state.occupationData);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    const barData = {
        labels: data.map((e: any) => e.occupationName),
        datasets: [
            {
                label: 'Dataset 1',
                data: data.map((e: any) => e.number),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    useEffect(() => {
        dispatch<any>(getOccupation());
    }, [dispatch]);
    return (
        <Container>
            <Paper>
                <h2>Occupation</h2>
                <div style={{height: '500px'}}>
                    <Bar
                        style={{width: '100%', height: '100%'}}
                        options={options}
                        data={barData}
                    />
                </div>
            </Paper>
        </Container>

    );
};
