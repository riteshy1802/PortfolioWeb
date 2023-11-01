import React from "react"

export default function Projects(props){
    const tools = props.langs.map((tool) => {
        return(
            <div className="langused">
                <li className="element">{tool}</li>
            </div>
        )
    })
    return (
        <div className="pros">
                <img src={props.image} className="img"/>
            <div className="info">
                <div className="title-go">
                    <h1 className="title">{props.title}</h1>
                    <a href={props.link} target="blank"><i class='bx bxs-right-arrow' id="arrow"></i></a>
                </div>
                <div className="abt">
                    <p>{props.about}</p>
                </div>
                
                    <div className="lang-links">
                        {tools}
                    </div>
                
                <div className="view">
                    <a href={props.code}>View Code</a>
                </div>
            </div>
        </div>
    )
}