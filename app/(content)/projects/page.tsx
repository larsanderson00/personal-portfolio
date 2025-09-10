// import ProjectDetails from '@/components/ProjectDetails';
import ProjectList from '@/components/ProjectList';
import { projects } from '@/project-info';

export default async function ProjectsPage() {
    return (
        <>
            <h1 className='text-center text-5xl m-6'>Projects</h1>
            <ProjectList projects={projects} />
            {/* <ProjectDetails /> */}
        </>
    );
}