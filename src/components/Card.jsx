import React from 'react'
import { iconEllipsis, iconWork } from "../assets/images/images"

const Card = ({ title }) => {

    const titleToColour = {
        "Work": "light-red-work",
        "Play": "soft-blue",
        "Study": "light-red-study",
        "Exercise": "lime-green",
        "Social": "violet",
        "Self Care": "soft-orange"
    }

    const background = titleToColour[title]
    return (
        <>
            <div>
                <div className={`relative h-14 bg-${background} top-4 rounded-lg z-0`}>
                    <img
                        src={iconWork}
                        alt="icon-work"
                        className="relative left-[72%]"
                    />
                </div>

                <div className="relative bg-dark-blue p-5 z-10 rounded-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white">{title}</h2>
                        <img src={iconEllipsis} alt="icon-ellipsis" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-white text-3xl font-light">32hrs</div>
                        <div className="text-pale-blue text-sm">Last Week - 36hrs</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card