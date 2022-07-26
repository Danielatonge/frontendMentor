import './App.css';
import { AppCard } from './components/AppCard';
import { useEffect, useState, useCallback } from 'react'
import data from './data.json'

function App() {
  const [jobList, setJobList] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setJobList(data)
  }, [])

  const handleSkillClicked = (skill) => {
    const found = search.find((item) => item === skill);
    if (!found) {
      setSearch(current => [...current, skill]);
    }
  }

  const removeSkill = (skill) => {
    const newSearch = search.filter((item) => item !== skill);
    setSearch(newSearch);
  }

  const clearSearch = useCallback(() => {
    setSearch([]);
  }, []);

  useEffect(() => {
    const filteredJobs = data.filter(({ role, level, languages, tools }) => {
      const skills = [role, level, ...languages, ...tools];
      const findSkill = skills.filter((skill) => search.includes(skill))
      return findSkill.length === search.length;
    });
    console.log("FILTERED: ", filteredJobs)
    setJobList(filteredJobs);

  }, [search]);

  const filterDisplay = search.length !== 0 && (
    <div className="mx-6 mb-28 md:mb-8 relative md:container md:mx-auto">
      <div className="flex items-center p-5 md:px-9 bg-white rounded-md absolute -top-8 shadow-lg z-10 w-full">
        <div className="flex flex-wrap gap-4">
          {search.map((item) => (
            <div key={item} className="p-3 bg-light_grayish_cyan rounded-md text-desaturated_dark_cyan pb-2 font-bold relative overflow-hidden pr-12">
              <span>{item}</span>
              <div
                onClick={() => removeSkill(item)}
                className="absolute inset-y-0 right-0 px-3 bg-desaturated_dark_cyan flex items-center hover:bg-very_dark_grayish_cyan cursor-pointer">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path fill="#ffffff" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => clearSearch()}
          className="text-dark_grayish_cyan hover:underline hover:text-desaturated_dark_cyan ml-auto pl-4 cursor-pointer">
          Clear
        </div>
      </div>
    </div>
  );


  return (
    <div className="bg-bg_light_grayish_cyan flex flex-col h-auto min-h-full">
      <div className="bg-desaturated_dark_cyan">
        <div
          className="bg-mobile-header bg-cover h-36 md:h-40 bg-no-repeat md:bg-desktop-header"></div>
      </div>

      {filterDisplay}

      <div className="mx-6 py-14 flex flex-col gap-14 md:gap-8 md:container md:mx-auto">
        {jobList.map((job) => <AppCard key={job.id} jobPost={job} skillClicked={handleSkillClicked} />)}
      </div>
    </div>
  );
}

export default App;
