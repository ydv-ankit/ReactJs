import React from "react"
export default function Card(){
    const details = {
        imgUrl: "https://thumbs.dreamstime.com/b/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg",
        title : "Artificial Intelligence",
        description : "AI stands for Artificial Intelligence, which refers to the development of computer systems that can perform tasks that typically require human intelligence, such as perception, reasoning, learning, and decision-making. AI can be classified into several categories, including machine learning, natural language processing, computer vision, etc"
    }

    return(
        <div>
            <h1>{details.title}</h1>
            <div style={{width: 44}}><img src={details.imgUrl} alt="image" /></div>
            <span>{details.description}</span>
        </div>
    )
}
