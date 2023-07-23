import {Menu, MenuItem, Sidebar, SubMenu, useProSidebar} from "react-pro-sidebar";
import React from "react";
import '../containers/SideBar.module.css';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {Link} from "react-router-dom";

const SideBar = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <Sidebar width="320px" className="app">
            <Menu>
                <MenuItem
                    className="menu1"
                    icon={
                        <MenuRoundedIcon
                            onClick={() => {
                                collapseSidebar();
                            }}
                        />
                    }
                >
                    <h5>Stealth</h5>
                </MenuItem>
                <MenuItem component={<Link to="/" /> } icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
                <SubMenu open={true} label="Charts" icon={<BarChartRoundedIcon />}>
                    <MenuItem  component={<Link to="/dashboard/sales-by-region" />}>Sales by Region</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/sales-by-category" />}>Sales by Category</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/age-count" />}>Age Count</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/gender-chart" />}>Gender</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/occupation" />}>Occupation</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/sales-vs-target" />}>Sales vs Target</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/top10-products" />}>Top Selling</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/profit-and-revenue" />}>Profit & Revenue</MenuItem>
                    <MenuItem  component={<Link to="/dashboard/sales-conversion-rate" />}>Sales Conversion Rate </MenuItem>
                    <MenuItem  component={<Link to="/dashboard/sales-trend-over-time" />}>Sales Trend</MenuItem>
                </SubMenu>
                <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
                    <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                    <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                    <MenuItem icon={<NotificationsRoundedIcon />}>
                        Notifications
                    </MenuItem>
                </SubMenu>
                <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default SideBar;
