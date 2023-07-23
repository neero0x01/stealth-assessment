import React from 'react';
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";

export const SalesConversionRate = () => {
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
                    <h2 style={{fontSize: '110px'}}>67%</h2>
                </div>
            </Paper>
        </Container>
    );
};
