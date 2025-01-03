import { Slide, Typography } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector
} from "@mui/lab";
import { devEdu } from "../../constants/details";
import { HomeRepairServiceRounded } from "@mui/icons-material";

const DevExpTimeline = ({ loading }) => {
    return (
        <>
            <Timeline position="right" sx={{ direction: "ltr" }}>
                {
                    devEdu.map((item, index) => (
                        <Slide key={index} direction="up" in={loading} style={{
                            transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                        }}>
                            <TimelineItem >
                                <TimelineSeparator>
                                    <TimelineDot color="warning" variant="outlined">
                                        <HomeRepairServiceRounded color="warning" />
                                    </TimelineDot>
                                    {index !== 2 ? <TimelineConnector /> : null}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="caption" color="gray">
                                        {item.year}
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                        {item.cort}
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        {item.major}
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        {item.place}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Slide>
                    ))
                }
            </Timeline>
        </>
    )
}

export default DevExpTimeline
