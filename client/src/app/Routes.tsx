import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import MainLayout from "../containers/MainLayout";
import {Home} from "../containers/Home";
import {SalesByRegion} from "../sales/sales-by-region/SalesByRegion";
import {SalesByCategory} from "../sales/sales-by-category/SalesByCategory";
import {AgeCount} from "../sales/customer-demographics/AgeCount";
import {GenderChart} from "../sales/customer-demographics/GenderChart";
import {SalesVSTarget} from "../sales/sales-vs-target/SalesVSTarget";
import {TopProductSell} from "../sales/top-selling-products/TopProductSell";
import {ProfitAndRevenue} from "../sales/profit-and-revenue/ProfitAndRevenue";
import {SalesConversionRate} from "../sales/sales-conversion-rate/SalesConversionRate";
import SalesTrendOverTime from "../sales/sales-trend-over-time/SalesTrendOverTime";
import {OccupationData} from "../sales/customer-demographics/OccupationData";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to="/dashboard" replace /> },
            {
                path: '/dashboard',
                element: <Home />
            },
            {
                path: '/dashboard/sales-by-region',
                element: <SalesByRegion />
            },
            {
                path: '/dashboard/sales-by-category',
                element: <SalesByCategory />
            },
            {
                path: '/dashboard/age-count',
                element: <AgeCount />
            },
            {
                path: '/dashboard/occupation',
                element: <OccupationData />
            },
            {
                path: '/dashboard/gender-chart',
                element: <GenderChart />
            },
            {
                path: '/dashboard/sales-vs-target',
                element: <SalesVSTarget />
            },
            {
                path: '/dashboard/top10-products',
                element: <TopProductSell />
            },
            {
                path: '/dashboard/profit-and-revenue',
                element: <ProfitAndRevenue />
            },
            {
                path: '/dashboard/sales-conversion-rate',
                element: <SalesConversionRate />
            },
            {
                path: '/dashboard/sales-trend-over-time',
                element: <SalesTrendOverTime />
            },
        ]
    },

]);

export { Router };