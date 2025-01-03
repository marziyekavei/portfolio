import { devSkills } from "../../constants/Skills";
import { useState, useEffect } from "react";
import {Skill} from './'

const Skills = () => {

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [react, setReact] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50);
            });
            setHtml(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
            setCss(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 55);
            });
            setReact(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50);
            });
            setGit(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 40);
            });
        }, 100);

        //unMouth
        return () => {
            clearInterval(timer);
        }
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, gitSkill } = devSkills;

    return (
        <>

            <Skill name={htmlSkill.name} icon={htmlSkill.icon}
                color={htmlSkill.color} value={html} />

            <Skill name={cssSkill.name} icon={cssSkill.icon}
                color={cssSkill.color} value={css} />

            <Skill name={jsSkill.name} icon={jsSkill.icon}
                color={jsSkill.color} value={javascript} />

            <Skill name={reactSkill.name} icon={reactSkill.icon}
                color={reactSkill.color} value={react} />

            <Skill name={gitSkill.name} icon={gitSkill.icon}
                color={gitSkill.color} value={git} />
        </>
    )
}

export default Skills;
