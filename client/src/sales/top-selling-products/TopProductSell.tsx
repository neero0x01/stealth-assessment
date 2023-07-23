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
import {getTopProductSell} from '../../store/reducers/topProducts.reducer';
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
export const TopProductSell = () => {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector((state) => state.topProductsSell);
    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
        },
    };

    const horizontalBarData = {
        labels: data.map((e: any) => e.productName),
        datasets: [
            {
                label: 'Dataset 1',
                data: data.map((e: any) => e.totalSoldQty),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    useEffect(() => {
        dispatch<any>(getTopProductSell());
    }, [dispatch]);
    return (
        <Container>
            <Paper>
                <h2>Top Product Sell</h2>
                <div style={{height: '500px'}}>
                    <Bar
                        style={{width: '100%', height: '100%'}}
                        options={options}
                        data={horizontalBarData}
                    />
                </div>
            </Paper>
        </Container>

    );
};
