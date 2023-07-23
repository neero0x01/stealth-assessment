import {ResponsiveLine} from '@nivo/line'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useEffect} from "react";
import {getSalesTrendOverTimeData} from "../../store/reducers/salesTrendOverTime.reducer";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";

const SalesTrendOverTime = () => {
    const dispatch = useAppDispatch();
    let {data} = useAppSelector((state) => state.salesTrendOverTime);

    useEffect(() => {
        dispatch<any>(getSalesTrendOverTimeData());
    }, [dispatch]);

    type Data = { month: number, day: number, year: number }

    const turnDataIntoDates = (data: Data[]) => {
        const quantities: any = {};

        for (const item of data) {
            const date = new Date(item.year, item.month, item.day);
            const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            let quantity = quantities[dateString];
            if (quantity === undefined) {
                quantity = 1;
            } else {
                quantity++;
            }
            quantities[dateString] = quantity;
        }

        const results: any[] = [];
        for (const [dateString, quantity] of Object.entries(quantities)) {
            results.push({x: dateString, y: quantity});
        }

        return results;
    };
    ;

    const quantity: { x: string, y: number }[] = turnDataIntoDates(data);


    const data2 = [
        {
            id: "Sales",
            data: quantity
        }];

    return (
        <Container>
            <Paper>

                <h2>Sales Trend Over Time</h2>
                <div style={{height: '500px'}}>
                    <ResponsiveLine
                        data={data2}
                        margin={{top: 50, right: 110, bottom: 50, left: 60}}
                        xScale={{
                            type: "time",
                            format: "%Y-%m-%d"
                        }}
                        xFormat="time:%Y-%m-%d"
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "count",
                            legendOffset: -40,
                            legendPosition: "middle",
                            format: ".2s"
                        }}
                        axisBottom={{
                            format: "%b %d %y",
                            //tickValues: "every 2 days",
                            // tickRotation: -90,
                            legend: "time scale",
                            legendOffset: -12
                        }}
                        colors={{scheme: "nivo"}}
                        pointSize={10}
                        pointColor={{theme: "background"}}
                        pointBorderWidth={2}
                        pointBorderColor={{from: "serieColor"}}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>

            </Paper>
        </Container>
    )
}

export default SalesTrendOverTime;