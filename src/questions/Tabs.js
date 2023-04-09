import React, { useState } from 'react'

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0)
    const handleClick = (index) => {
        setActiveTab(index)
    }

    return (
        <React.Fragment>
            <div className="container">
                {tabs.map((tab, index)=>(
                    <button key={index} onClick={()=>handleClick(index)}>{tab.title}</button>
                ))}
                <div className="content">
                    {tabs[activeTab].content}
                </div>
            </div>

        </React.Fragment>
    )
}
