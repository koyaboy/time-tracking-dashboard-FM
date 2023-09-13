import React from 'react'
import { iconEllipsis, iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfCare } from "../assets/images/images"

const Card = ({ title, selection, dailyCurrent, dailyPrevious, weeklyCurrent, weeklyPrevious, monthlyCurrent, monthlyPrevious }) => {

    const titleToColour = {
        "Work": "hsl(15, 100%, 70%)",
        "Play": "hsl(195, 74%, 62%)",
        "Study": "hsl(348, 100%, 68%)",
        "Exercise": "hsl(145, 58%, 55%)",
        "Social": "hsl(264, 64%, 52%)",
        "Self Care": "hsl(43, 84%, 65%)"
    }

    const titleToIcon = {
        "Work": iconWork,
        "Play": iconPlay,
        "Study": iconStudy,
        "Exercise": iconExercise,
        "Social": iconSocial,
        "Self Care": iconSelfCare
    }

    const background = titleToColour[title]
    return (
        <>
            <div className='lg:row-span-1 lg:col-span-1'>
                <div
                    className={`relative h-14 top-4 rounded-lg z-0`}
                    style={{ backgroundColor: titleToColour[title] }}
                >
                    <img
                        src={titleToIcon[title]}
                        alt="icon"
                        className="relative left-[72%] lg:left-[60%] xl:left-[70%]"
                    />
                </div>

                <div className="relative bg-dark-blue p-5 z-10 rounded-lg group hover:cursor-pointer">
                    <div className='overlay absolute rounded-lg group-hover:bg-white group-hover:bg-opacity-20 w-full h-full top-0 left-0'></div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-white">{title}</h2>
                        <img src={iconEllipsis} alt="icon-ellipsis" className='cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-between lg:flex-col lg:items-start lg:mt-6">
                        {selection === "Daily" && (
                            <>
                                <div className="text-white text-3xl font-light lg:text-5xl">{dailyCurrent}hrs</div>
                                <div className="text-pale-blue text-sm">Last Week - {dailyPrevious}hrs</div>
                            </>
                        )}
                        {selection === "Weekly" && (
                            <>
                                <div className="text-white text-3xl font-light lg:text-5xl">{weeklyCurrent}hrs</div>
                                <div className="text-pale-blue text-sm">Last Week - {weeklyPrevious}hrs</div>
                            </>
                        )}
                        {selection === "Monthly" && (
                            <>
                                <div className="text-white text-3xl font-light lg:text-5xl">{monthlyCurrent}hrs</div>
                                <div className="text-pale-blue text-sm">Last Week - {monthlyPrevious}hrs</div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card