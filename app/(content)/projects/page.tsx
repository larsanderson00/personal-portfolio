import ProjectList from '@/components/ProjectList';
import { projects } from '@/project-info';

export default async function ProjectsPage() {
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={projects} />
        </>
    );
}