import Link from 'next/link';

export default function ProjectList({ projects } : {projects:any}) {
    return (
        <ul className='flex flex-wrap gap-5 justify-center content-center'>
            {projects.map((project:any) => (
                <li className='hover:bg-bg-secondary p-2 rounded-md' key={project.id}>
                    <Link href={project.projectUrl}>
                        <img className='w-md rounded-sm' src={project.imageUrl} alt={project.name} />
                        <span className='block text-center'>{ project.name }</span>
                        <span className='block text-center'>{ project.tech }</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}