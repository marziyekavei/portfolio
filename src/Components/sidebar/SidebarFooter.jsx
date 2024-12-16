import {FavoriteRounded, CopyrightRounded} from '@mui/icons-material';
import {Box, Typography} from '@mui/material'

const SidebarFooter = () => {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    height: 100
                }}
            >
                <Typography variant='subtitle2' color="text.primary">
                    طراحی شده با {" "} MUI & React
                    {/* <FavoriteRounded sx={{ verticalAlign: "middle", color: "tomato", height: 20 }} /> */}
                </Typography>

                <Typography variant='caption' color="text.primary" sx={{ mt: 2 }}>
                    کپی رایت 1403 {" "}
                    <CopyrightRounded sx={{ verticalAlign: "midlle", height: 16 }} />
                </Typography>

            </Box>
        </>
    )
}

export default SidebarFooter
