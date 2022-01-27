import Project from '../Project'

export default function Projects({ projects }) {
    return (
        <div className='lg:w-7/12'>
            <h2 className='mb-4 text-4xl text-center'>Projects</h2>
            {projects.map(project => <Project project={project} key={project.title} />)}
        </div>
    )
}