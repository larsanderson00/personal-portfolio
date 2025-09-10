function SkillBulletPoint({ index, skill} : {index: number, skill: string}) {
    return (
        <li key={index}>
            {skill}
        </li>
    );
}

export default function SkillsList({ skills } : any) {
    return (
        <div className="mt-5">
            <h3 className="text-2xl">Skills</h3>
            <ul>
                {skills.map((skill:string, index:number) => {
                    return(
                        <SkillBulletPoint key={index} index={index} skill={skill} />
                    );
                })}
            </ul>
        </div>
    );
}