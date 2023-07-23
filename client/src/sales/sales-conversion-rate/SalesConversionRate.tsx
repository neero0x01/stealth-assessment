import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getConversionRate} from "../../store/reducers/conversionRate.reducer";

export const SalesConversionRate = () => {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector((state) => state.conversionRate);


    useEffect(() => {
        dispatch<any>(getConversionRate());
    }, [dispatch]);


    return (
        <Container>
            <Paper>
                <h2>Sales Conversion Rate</h2>
                <div
                    style={{
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {' '}
                    <h2 style={{fontSize: '110px'}}>{ parseFloat(data)?.toFixed(2)}%</h2>
                </div>
            </Paper>
        </Container>
    );
};
