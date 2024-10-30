import { Typography } from '@mui/material';
import avatar from "../../assets/IMG_20230322_194235_717.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionButton from '../ThemeActionButton';
import { CustomAvatar } from '../common';
import SocailMedia from '../SocailMedia';


const SidebarHeader = () => {
    return (
        <>
            <ThemeActionButton />
            <CustomAvatar
                avatar={avatar}
                size={200}
                fallback="mk"
            />
            <Typography variant="h6" color="primary">
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters="مرضیه کاوئی" />
            </Typography>
            <Typography variant="caption" color="gray">
                فرانت اند دولوپر
            </Typography>
            <SocailMedia />
        </>
    )
}

export default SidebarHeader;
