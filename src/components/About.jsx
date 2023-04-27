import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
    return(
        <div className="About">
            <Helmet><title>About Me</title></Helmet>
            <h1>About Me</h1>
            <div className="myInfo">
                <p>Hey there! My name is Luis Medina 👋 I am an Engineer at heart, passionate creator, tech enthusiast, and Marvel movie loving nerd!</p>
                <ul>
                    <li>🏢 I currently work in the Property & Casualty Underwriting department at State Farm®</li>
                    <li>📚 I am a Senior attending Arizona State University for my B.S. in Computer Science</li>
                    <li>📚 I also hold an Associate in Science with an Emphasis in Computer Science</li>
                    <li>🥅 My current goal is to transition to a Software Engineer role and eventually become a Full Stack Engineer</li>
                    <li>⚡ Most of my (limited) free time is spent 3D printing, playing video games, and hanging out with my wife!</li>
                </ul>
            </div>
        </div>
    )
}