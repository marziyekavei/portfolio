import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent } from "@mui/material";
import { SchoolRounded } from "@mui/icons-material";
import { CustomDivider } from "../Components/common";
import { ShowCourses } from "../Components/pages";


const Courses = ({ helmetTitle }) => {

    const [loading, SetLoading] = useState(false);

    useEffect(() => {
        SetLoading(true);

        return () => {
            SetLoading(false)
        }
    }, []);

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll"
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="primary.main"
                    cColor="primary"
                    icon={<SchoolRounded />}
                    align="center"
                    text="دوره های من"
                />

                <Grid container sx={{ mx: 3 }}>
                    <ShowCourses loading={loading}/>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default Courses;