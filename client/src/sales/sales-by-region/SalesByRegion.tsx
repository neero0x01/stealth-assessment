import React, {useEffect} from 'react';
import {ResponsiveChoropleth} from '@nivo/geo';
import {countries} from '../../fake-db';
import {getSalesByRegion} from '../../store/reducers/salesByRegion.reducer';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";


export const SalesByRegion = () => {
    const {data} = useAppSelector((state: any) => state.salesByRegion);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch<any>(getSalesByRegion());
    }, [dispatch]);

    return (
        <Container>
            <Paper>

                <h2>Sales By Region</h2>
                <div style={{height: '500px', width: '100%'}}>
                    {countries?.features && (
                        <ResponsiveChoropleth
                            data={data}
                            features={countries.features}
                            margin={{top: 0, right: 0, bottom: 0, left: 0}}
                            colors='nivo'
                            domain={[0, 420]}
                            unknownColor='#666666'
                            label='properties.name'
                            valueFormat='.2s'
                            projectionTranslation={[0.5, 0.5]}
                            projectionRotation={[0, 0, 0]}
                            enableGraticule={true}
                            graticuleLineColor='#dddddd'
                            borderWidth={0.5}
                            borderColor='#152538'
                            legends={[
                                {
                                    anchor: 'bottom-left',
                                    direction: 'column',
                                    justify: true,
                                    translateX: 20,
                                    translateY: -100,
                                    itemsSpacing: 0,
                                    itemWidth: 94,
                                    itemHeight: 18,
                                    itemDirection: 'left-to-right',
                                    itemTextColor: '#444444',
                                    itemOpacity: 0.85,
                                    symbolSize: 18,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000000',
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    )

                    }
                </div>
            </Paper>
        </Container>
    );
};
