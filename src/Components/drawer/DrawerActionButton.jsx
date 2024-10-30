import { useContext } from 'react';
import { red } from '@mui/material/colors';
import { MenuRounded } from '@mui/icons-material';
import { Fab, Box } from "@mui/material";
import MainContext from "../../context";

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext);
    return (
        <Box sx={{
            position: "absolute",
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
            }
        }}>
            <Fab
                aria-label='Sidebar'
                size='small'
                sx={{ m: 2, backgroundColor: red[500] }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuRounded />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton;