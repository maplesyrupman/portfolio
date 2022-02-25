import React from "react"
import { FaEnvelope, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { GiChessKnight } from 'react-icons/gi'

export default function Contact() {
    return (
        <div className="lg:w-7/12 flex flex-col gap-3 lg:px-16 items-center text-center">
            <h2 className="text-4xl">Contact</h2>
            <div className="px-20 my-2">
                <p>If you want to get in touch to talk about a job opportunity, discuss the crazy weather we've been having, or play a game of chess, you can reach me through the following communication channels:</p>
                <ul className="my-4 p-2">
                    <li>
                        <a href="mailto:will_weiland@hotmail.ca">
                            <FaEnvelope className="inline-block mb-0.5" />{' '}
                            will_weiland@hotmail.ca
                        </a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/william-weiland-msm/'>
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
                <p className="my-2">If you are a recruiter or prospective employeer and enjoy reading resumes, please click <a href='https://1drv.ms/w/s!ApgYR6HSLrANnF6Crt4VrbFHqBtN?e=JbXMr1' className="underline" target={'_blank'}>here</a> to see mine.
                However, if you prefer impromptu interviews and want to catch me off guard, give me a call at <a href="tel:+14165797681" className="underline">416-579-7681</a>
                </p>
            </div>
        </div>
    )
}