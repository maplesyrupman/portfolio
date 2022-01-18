import React from "react"
import { FaEnvelope, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { GiChessKnight } from 'react-icons/gi'

export default function Contact() {
    return (
        <div className="lg:w-7/12 flex flex-col gap-3 py-10 lg:px-16 items-center text-center">
            <h2 className="text-4xl">Contact</h2>
            <div className="px-20">
                <p>If you want to get in touch to talk about a job opportunity, discuss the crazy weather we've been having, or play a game of chess, you can reach me through the following communication channels:</p>
                <ul className="my-4">
                    <li>
                        <a href="mailto:will_weiland@hotmail.ca">
                            <FaEnvelope className="inline-block mb-0.5" />{' '}
                            will_weiland@hotmail.ca
                        </a>
                    </li>
                    <li>
                        <a href='linkedin.com/in/william-weiland-msm'>
                            <FaLinkedin className="inline-block mb-0.5" />
                            LinkedIn
                            </a>
                    </li>
                    <li>
                        <a href='https://stackoverflow.com/users/15218316/maplesyrupman'>
                            <FaStackOverflow className="inline-block mb-0.5" />
                            Stack Overflow
                            </a>
                    </li>
                    <li>
                        <a href='https://www.chess.com/member/william_sjw' style={{verticalAlign: 'text-bottom'}}>
                            <GiChessKnight className="inline-block mb-0.5" /> 
                            Chess.com
                            </a>
                            </li>
                </ul>
                <p>If you are a recruiter or prospective employeer and prefer to read a resume, please click <a href='#' className="underline">here</a> to download mine.</p>
            </div>
        </div>
    )
}