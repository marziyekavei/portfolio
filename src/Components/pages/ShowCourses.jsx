import { Card, Slide, CardContent, CardMedia, CardActionArea, CardActions, Button,Typography } from "@mui/material"
import EllipsisText from "react-ellipsis-text";
import { courses } from '../../constants/courses';
import Grid from "@mui/material/Unstable_Grid2";


const ShowCourses = ({loading}) => {
    return (
        <>
            {
                courses.map((cource, index) => (
                    <Grid key={index} xs={12} sm={6} md={6} lg={4} xl={4} sx={{ px: 2, mt: 2 }}>
                        <Slide direction="up" in={loading} style={{
                            transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                        }}>
                            <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height={200}
                                        width={200}
                                        image={cource.image}
                                        alt={cource.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" textAlign="left" gutterBottom>
                                            {cource.title}
                                        </Typography>
                                        <Typography sx={{ direction: "ltr" }} variant="body2" color="text.secondary" textAlign="left" gutterBottom>
                                            <EllipsisText text={cource.info} length={100} />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button href={cource.link} size="small" color="primary" target="_blank">
                                        اطلاعات بیشتر
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                ))
            }
        </>
    )
}

export default ShowCourses
