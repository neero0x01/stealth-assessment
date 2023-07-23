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
import {getSalesVSTarget} from '../../store/reducers/salesVSTarget.reducer';
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
export const SalesVSTarget = () => {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector((state) => state.salesVSTarget);
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
    }, [dispatch]);
    return (
        <Container>
            <Paper>
                <h2>Sales VS Target</h2>
                <div style={{height: '500px'}}>
                    <Bar
                        style={{width: '100%', height: '100%'}}
                        options={options}
                        data={chaseBarData}
                    />
                </div>
            </Paper>
        </Container>

    );
};
