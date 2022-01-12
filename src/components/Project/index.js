import React from "react"
import { FaGithub } from 'react-icons/fa'

export default function Project({ project }) {
    const { title, image, explanation, liveLink, ghLink } = project
    return (
        <div className="block bg-white lg:w-5/12 text-center border border-4 border-black text-white my-8">
            <div className="py-3 px-6 bg-black">
                <h5 className="text-3xl font-medium font-mono text-center">{title}</h5>
            </div>
            <div className="max-w-full p-12">
                <img src={image} className="border border-double border-4 border-slate-400" />
            </div>
            <div className="p-6 bg-black flex flex-col">
                <p className="text-base mb-4 ">
                    {explanation}
                </p>
                <div className="flex flex-col max-w-min mx-auto">
                    <a href={liveLink} className="">ranter2-0.herokuapp.com</a>
                    <a href={ghLink} className="whitespace-nowrap">
                        <FaGithub className="inline-block" />
                        <p className="inline-block">Github</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

