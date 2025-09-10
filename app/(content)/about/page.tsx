import SkillsList from "@/components/SkillsList"

export default function AboutPage() {
    const skills = [
        "HTML, CSS, JavaScript",
        "JavaScript Frameworks: React, Next.js",
        "Python, C#, SQL, PHP",
        "Django",
        "Using APIs",
        "GitHub",
        "PostgreSQL and SQL Server Management Studio",
        "Microsoft Office",
        "Adobe Suite",
        "DaVinci Resolve",
        "Active Directory"
    ];

    return (
        <div>
            <h1 className="text-center text-5xl m-6">About</h1>
            <div className="w-100 m-auto">
                <p>
                    Hi, I&apos;m Lars and I&apos;m currently a student at Red River College 
                    Polytechnic in their Business Information Technology course. I have skills in various areas from graphic design 
                    and video editing to programming, configuring networks, 
                    and troubleshooting.
                </p>
            
                <SkillsList skills={skills} />
            </div>
        </div>
    )
}