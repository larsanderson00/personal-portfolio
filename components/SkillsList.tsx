import { Box, Grid } from "@mui/material";
import { skills } from "./constants";
import Image from "next/image";

function SkillBulletPoint({ skill, link } : {skill:string, link:string}) {
    return (
        <Grid>
            <Box sx={{maxWidth: 200, padding: 2, textAlign:"center", backgroundColor: "red"}}>
                <Image width={200} height={200} src={link} alt={skill} />
                <p>{skill}</p>
            </Box>
        </Grid>
    );
}

// IDEA:
/*
    Highlighted Skills section -> pick 3-5 skills and put them at the top
    Under that there are sections called things like "Editing", "Web Development", "Programming Languages", etc.
    When you hover over it all the skills associated pop out with their logos from the center, the center becomes an
    X to close it. Looks like this (Os are skills): So if some are missing just remove from either bottom corner or all corners.
    Whatever looks good.

    O O O    O 
    O X O  O X O
    O O O      O
*/
export default function SkillsList() {
    return (
        <div className="mt-5">
            <h3 className="text-2xl">Skills</h3>
            <Grid container spacing={2}>
                    <SkillBulletPoint skill="Gimp" link={skills.Gimp} />
                    <SkillBulletPoint skill="Adobe Photoshop" link={skills.Photoshop} />
                    <SkillBulletPoint skill="Python" link={skills.Python} />
                    <SkillBulletPoint skill="AWS" link={skills.AWS} />
            </Grid>
        </div>
    );
}