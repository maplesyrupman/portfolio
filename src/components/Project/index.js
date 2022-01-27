import UseCollapse from 'react-collapsed'
import { FaGithub, FaFirefoxBrowser as FaFF } from 'react-icons/fa'

export default function Project({ project }) {
    const { title, image, explanation, liveLink, ghLink } = project
    const { getCollapseProps, getToggleProps, isExpanded } = UseCollapse()
    return (
        <div className="collapsible lg:mx-20 bg-white text-center border border-4 border-black text-white my-2">
            <div className="header py-3 px-6 bg-black" {...getToggleProps()}>
                <h5 className="text-3xl font-medium font-mono text-center">{title}</h5>
            </div>
            <div {...getCollapseProps()}>
                <div className='content'>
                    <div className="max-w-full p-12">
                        <img src={image} className="border border-double border-4 border-slate-400" />
                    </div>
                    <div className="p-6 bg-black">
                        <div className="">
                            <p className="text-base mb-4 ">
                                {explanation}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p className="">Uses the following technologies:</p>
                                <ul>
                                    {project.technologies.map(tech => (
                                        <li key={tech}>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <a href={liveLink} className="whitespace-nowrap">
                                    <FaFF className='inline-block mb-0.5' />{' '}
                                    <p className='inline-block hover:underline'>Live Site</p>
                                </a>
                                <a href={ghLink} className="whitespace-nowrap">
                                    <FaGithub className="inline-block mb-0.5" />{' '}
                                    <p className="inline-block hover:underline">README</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

