import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import SideBar from "../app/SideBar";

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box style={{ display: "flex", height: "100vh" }}>
                <SideBar />
            </Box>
            {/* main content */}
            <main style={{ flexGrow: 2 }}>
                <Outlet />
            </main>
        </Box>
    );
};

export default MainLayout;