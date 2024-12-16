import { Card, CardContent, Grid, Box} from "@mui/material";
import avatar from "../assets/IMG_20230322_194235_717.jpg";
import { DevInfo, Skills, DevWorkCount} from "../Components/pages";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material"
import { Helmet } from "react-helmet-async";
import { CustomAvatar, CustomDivider } from "../Components/common";


const About = ({ helmetTitle }) => {

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll"
        }}>
            <Helmet>
                <title> {helmetTitle} </title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}

                    >
                        <CustomDivider
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text="توسعه دهنده فرانت اند"
                        />
                        <Grid container >
                            <Grid xs={4} sm={4} md={3} lg={3} sx={{
                                mt: 3,
                                display: {
                                    xs: "none", sm: "block", md: "block"
                                },
                            }}>

                                <DevWorkCount />
                            </Grid>

                            <Grid xs={12} sm={8} md={9} lg={9} >
                                <DevInfo/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item
                        xs={0}
                        sm={0}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                mt: { xs: 2, sm: 0 } // فاصله از بالا در سایزهای کوچک
            }}
        >
            <CustomAvatar avatar={avatar} size={200} fallback="mk" />
        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<SelfImprovementRounded />}
                            align="center"
                            text="مهارت های من"
                        />
                        <Skills />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About;