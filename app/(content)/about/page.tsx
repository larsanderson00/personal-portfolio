import SkillsList from "@/components/SkillsList"

export default function AboutPage() {
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
            
                <SkillsList />
            </div>
        </div>
    )
}