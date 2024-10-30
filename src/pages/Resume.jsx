import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { SettingsEthernetRounded, SchoolRounded, HomeRepairServiceRounded } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import { CustomDivider } from "../Components/common";
import {DevEduTimeline, DevExpTimeline} from "../Components/pages";


const Resume = ({ helmetTitle }) => {

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
                    bColor="error.main"
                    cColor="error"
                    icon={<SettingsEthernetRounded />}
                    align="center"
                    text="رزومه من"
                />

                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <CustomDivider
                            bColor="warning.main"
                            cColor="warning"
                            icon={<HomeRepairServiceRounded />}
                            align="center"
                            text="تجربه ها"
                        />
                        <DevExpTimeline loading={loading}/>
                    </Grid>

                    <Grid xs={6}>
                        <CustomDivider
                            bColor="info.main"
                            cColor="info"
                            icon={<SchoolRounded />}
                            align="center"
                            text="تحصیلات"
                        />
                        <DevEduTimeline loading={loading}/>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default Resume;