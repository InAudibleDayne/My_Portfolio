import React from 'react';
import profilePicture from "../../../static/assets/images/Photo-of-me.jpg";

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
                    
                </div>
            </div>
        </div>
    );
}