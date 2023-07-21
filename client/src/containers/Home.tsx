import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SalesByRegion } from '../sales/sales-by-region/SalesByRegion';
import { SalesByCategory } from '../sales/sales-by-category/SalesByCategory';
import { AgeCount } from '../sales/customer-demographics/AgeCount';
import { OccupationData } from '../sales/customer-demographics/OccupationData';
import { GenderChart } from '../sales/customer-demographics/GenderChart';
import { SalesVSTarget } from '../sales/sales-vs-target/SalesVSTarget';
import { TopProductSell } from '../sales/top-selling-products/TopProductSell';
import { ProfitAndRevenue } from '../sales/profit-and-revenue/ProfitAndRevenue';
import { SalesConversionRate } from '../sales/sales-conversion-rate/SalesConversionRate';

export const Home = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper>
              <h2>Sales By Region</h2>
              <SalesByRegion />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Sales By Category</h2>
              <SalesByCategory />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Age Count</h2>
              <AgeCount />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Occupation Data</h2>
              <OccupationData />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Gender Data</h2>
              <GenderChart />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Sales VS Target Data</h2>
              <SalesVSTarget />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <h2>Top 10 Products</h2>
              <TopProductSell />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <h2>Profit And Revenue</h2>
              <ProfitAndRevenue />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>
                Sales Conversion Rate:(%) <sub>(static)</sub>
              </h2>
              <SalesConversionRate />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <h2>Sales trend over time:</h2>
              <ProfitAndRevenue />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
