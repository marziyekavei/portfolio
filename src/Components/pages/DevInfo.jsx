import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}>

            {children}

            <KeyboardArrowLeftRounded sx={{
                verticalAlign: "bottom",
                color: "primary.main"
            }}
            />
        </Typography>
    )
};

const DevInfo = () => {
    return (
        <>
            <Info>  نام و نام خانوادگی : مرضیه کاوئی</Info>
            <Info> سن :  24 </Info>
            <Info> شهر :  اراک</Info>
            <Info> marziyekavei@gmail.com : آدرس ایمیل</Info>
            <Info> شماره موبایل :  091324769988 </Info>
        </>
    )
}

export default DevInfo;