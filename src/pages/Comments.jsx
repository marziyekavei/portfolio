import { Helmet } from "react-helmet-async";
import { Card, CardContent} from "@mui/material";
import { ForumRounded } from "@mui/icons-material";

import { CustomDivider } from '../Components/common'
import CommentsSlider from "../Components/pages/CommentsSlider";

const Comments = ({ helmetTitle }) => {

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column"
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="success.main"
                    cColor="success"
                    icon={<ForumRounded />}
                    align="center"
                    text="نظرات دانشجویان"
                />
              <CommentsSlider />
            </CardContent>
        </Card>
    )
};

export default Comments;