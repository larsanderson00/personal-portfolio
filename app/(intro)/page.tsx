import Link from 'next/link';
import Button from '@mui/material/Button'

export default function IntroPage() {
    return (
        <div id="intro">
            <img src="https://res.cloudinary.com/ds3adujw3/image/upload/v1737743751/myface-lg_yjtnfn.png" alt="Pixel art of my face." />
            <h1>Hi, I'm Lars!</h1>
            <p>
                I'm a programmer, web developer, and graphic designer based out of Manitoba, Canada.
            </p>

            <p>
                Currently I'm in school at Red River College Polytechnic for IT.
            </p>

            <p>
                MAKE ALL OF THIS POP MORE, I DUNNO HOW TO WRITE ABOUT MYSELFFF
            </p>

            <Button>
                <Link href="/projects">Check out my work</Link>
            </Button>
        </div>
    );
}