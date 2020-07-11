import React from 'react';
import profilePicture from "../../../static/assets/images/Photo-of-me.jpg";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                <div className="name">Dayne J. Bechtold</div>
                <div className="bio">
                    Dayne Bechtold is a full stack web developer who uses a variety of programming languages to build websites. While he prefers the front-end portion of the process he is also proficient at server-side code. <br /> Recently graduated from Bottega's full-stack course, Dayne has already completed several different projects. Interested? Find those <Link to="/">here</Link>. <br /> Dayne's love for programming began the moment he started learning HTML. To him programming feels like a puzzle; the feeling of a project coming together provides an unmatched sense of accomplishment. Because of this, he plans to continue programming for the rest of his life. <br /> Since a young age Dayne has been incredibly personable, making friends and connections anywhere he goes. Don't miss out on the opportunity to work with him. 
                </div>
            </div>
        </div>
    );
}