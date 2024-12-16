import { useEffect, useRef, useCallback, useState } from 'react'
import bg from "../assets/deoa7mp-8be39e58-2297-4a0e-8a77-fd9a824a7bc8.jpeg";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import TextTransition, { presets } from 'react-text-transition';
import { Helmet } from 'react-helmet-async';

const Home = ({helmetTitle}) => {

    const [index, setIndex] = useState(0);

    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "  توسعه دهنده فرانت اند هستم",
        " برنامه نویس هستم",
        " فری لنسر هستم",
        " محتوا ساز دنیای فرانت اند هستم",
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" مرضیه کاوئی "],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false,
        });

        const stringsTransition = setInterval(() => {
            setIndex(index => index + 1)
        }, 3000);

        // const typedInfo = new Typed(infoEl.current, {
        //     strings: strings,
        //     startDelay: 1500,
        //     typeSpeed: 80,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     loop: true,
        //     showCursor: false
        // });

        return () => {
            typedName.destroy();
            // typedInfo.destroy();
            clearInterval(stringsTransition);
        }

    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, [])

    return (
        <Box sx={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Helmet>
                <title> {helmetTitle} </title>
            </Helmet>

            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={links} />

            <Box component="div" sx={{ display: "flex" }}>
               
                <Typography ref={nameEl} variant='h3' color={"currentcolor"}>
                </Typography>
               
            </Box>

            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography ref={infoEl} variant='h4' color={"whitesmoke"}
                        sx={{
                            mt: 4,
                            textDecoration: "underLine",
                            textDecorationColor: "#1976d2"
                        }}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
                <Typography variant='h4' color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
                    من یک
                </Typography>
            </Box>
        </Box>
    )
}

export default Home;