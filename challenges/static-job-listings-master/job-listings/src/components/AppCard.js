import React from 'react'

export const AppCard = ({ jobPost, skillClicked }) => {
    const { company, logo, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools } = jobPost;
    const skills = [role, level, ...languages, ...tools];

    const newTag = isNew &&
        (<span className="bg-desaturated_dark_cyan text-white rounded-full px-3 pt-2 pb-1 font-bold uppercase">New!</span>)
    const featureTag = featured && (<span className="bg-very_dark_grayish_cyan text-white rounded-full px-3 pt-2 pb-1 ml-2 font-bold uppercase">Featured</span>)

    const isFeatured = featured && 'border-l-4';
    return (

        <div className={`bg-white rounded-md px-6 pt-10 pb-6 ${isFeatured} border-desaturated_dark_cyan relative shadow-lg md:flex md:flex-row md:items-center md:py-8 md:px-9`}>
            <img className="absolute -top-7 w-14 md:relative md:top-0 md:w-24" src={logo} alt="company logo" />
            <div className="md:ml-6">
                <div className="flex items-center mb-4">
                    <div className="text-desaturated_dark_cyan mr-6 font-bold pt-1">{company}</div>
                    {newTag}
                    {featureTag}
                </div>
                <div className="mb-4 font-bold hover:text-desaturated_dark_cyan text-xl cursor-pointer">
                    {position}
                </div>
                <div className="flex items-center gap-3 text-dark_grayish_cyan pb-5 mb-5 border-b-2 md:border-b-0 md:pb-0 md:mb-0">
                    <span>{postedAt}</span>  <span className="font-bold"> &#8729;</span>
                    <span>{contract}</span> <span className="font-bold"> &#8729;</span>
                    <span>{location}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap text-desaturated_dark_cyan font-bold md:ml-auto md:pl-6">
                {skills.map((skill, index) => (
                    <div key={index}
                        onClick={() => skillClicked(skill)}
                        className="p-3 bg-light_grayish_cyan rounded-md hover:text-white hover:bg-desaturated_dark_cyan pb-2 cursor-pointer"
                    >{skill}</div>
                ))}
            </div>
        </div>
    )
}