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
            <Info> سن :  23 </Info>
            <Info> شهر :  اراک</Info>
            <Info> marziyekavei@gmail.com : آدرس ایمیل</Info>
            <Info> شماره موبایل :  09199513873 </Info>
        </>
    )
}

export default DevInfo;