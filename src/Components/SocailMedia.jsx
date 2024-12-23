import { GitHub, Telegram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, IconButton } from "@mui/material";

const SocailMedia = () => {
    return (
        <Box component="div" sx={{ m: "0 auto", textAlign: "center" }} >
            <IconButton aria-label='GitHub'>
                <a href='https://github.com/marziyeKavei' target='_blank' rel='noopener noreferrer'>
                    <GitHub sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label='LinkedIn'>
                <a href='https://www.linkedin.com/in/marziyekavei' target='_blank' rel='noopener noreferrer'>
                    <LinkedIn sx={{ color: "gray" }} />
                </a>
            </IconButton>
            {/* <IconButton aria-label='Github'>
                <a href='https://telgram.com' target='_blank' rel='noopener noreferrer'>
                    <Telegram sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label='Github'>
                <a href='https://watsapp.com' target='_blank' rel='noopener noreferrer'>
                    <WhatsApp sx={{ color: "gray" }} />
                </a>
            </IconButton> */}
        </Box>
    )
}

export default SocailMedia;
