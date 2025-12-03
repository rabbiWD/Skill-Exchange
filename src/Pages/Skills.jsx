
import React, { use } from 'react';

const skillsPromise = fetch('/SkillData.json')
.then ((res)=> res.json())
// console.log(skillsPromise);

const Skills = () => {
    const skills = use(skillsPromise)
    return (
        <div>
            <h2 className='text-2xl font-bold'>Popular Skills ({skills.length})</h2>
        </div>
    );
};

export default Skills;