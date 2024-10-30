import { useContext } from 'react';
import { useTheme } from "@mui/material/styles";
import { WbSunnyOutlined, NightlightOutlined } from '@mui/icons-material';
import { Fab, Box } from "@mui/material";
import MainContext from "../context/index";


const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleThemeChange } = useContext(MainContext);

    return (
        <Box sx={{
            position: "absolute",
            display: {
                xs: "none",
                md: "block",
            }
        }}>
            <Fab
                aria-label='ThemeChanger'
                variant='extended'
                size='small'
                color='secondary'
                sx={{ ml: 2, color: "whitesmoke" }}
                onClick={handleThemeChange}
            >
                {theme.palette.mode === "dark" ? <WbSunnyOutlined sx={{ mr: 1 }} /> : <NightlightOutlined sx={{ mr: 1 }} />}
                {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
            </Fab>
        </Box>
    )
}

export default ThemeActionButton;