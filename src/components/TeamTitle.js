import React from "react";

const TeamTitle = (props) => {
    return(
        <div className="team-Title">
            <h1 style={{fontWeight: "bold"}}>{props.title}</h1>
        </div>
    )
}
export default TeamTitle