import React from "react"

export default function Hero() {
    return (
        <div className="lg:w-7/12 flex flex-col gap-3 py-10 px-16 items-center text-center">
            <h1 className="text-4xl">Hello, my name is William Weiland.</h1>
            <h2 className="text-2xl">I'm a fullstack developer kicking it in Toronto, Ontario.</h2>
            <div className="">
            <img src={require('../../images/hero.png')}></img>
            </div>
            <p>I create fullstack applications using Tailwindcss, Bootstrap, React, GraphQl, Express, Node, MongoDB, and MySQL. Althought these are the technologies I am most comfortable with, I love learning new ways to help me efficiently solve problems and build powerful applications.</p>
            <p>To relax I enjoy reading, play chess, and hitting the weights. I also love spending time with my 4 year old son playing hide and seek and making really tall but structurally insecure lego towers.</p>
        </div>
    )
}