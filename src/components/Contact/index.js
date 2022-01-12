import React from "react"

export default function Contact() {
    return(
        <div className="lg:w-7/12 flex flex-col gap-3 py-10 px-16 items-center text-center">
            <h2 className="text-4xl">Contact</h2>
            <div className="px-20">
                <p>If you want to get in touch to talk about a job opportunity, discuss the crazy weather we've been having, or play a game of chess, you can reach me through the following communication channels:</p>
                <ul className="my-4">
                    <li><a href="mailto:will_weiland@hotmail.ca">will_weiland@hotmail.ca</a></li>
                    <li>LinkedIn</li>
                    <li>StackOverflow</li>
                    <li>Chess.com</li>
                </ul>
                <p>If you are a recruiter or prospective employeer and prefer to read a resume, please click <a href='#' className="underline">here</a> to download mine.</p>
            </div>
        </div>
    )
}