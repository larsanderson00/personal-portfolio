import Link from 'next/link';

export default function ProjectList({ projects } : {projects:any}) {
    return (
        <ul className='project-list'>
            {projects.map((project:any) => (
                <li key={project.id}>
                    <Link href={project.projectUrl}>
                        <img src={project.imageUrl} alt={project.name} />
                        <span>{ project.name }</span>
                        <span>{ project.tech }</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}