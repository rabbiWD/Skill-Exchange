
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillDetailsCard from '../Components/SkillDetailsCard';
import BookForm from './BookForm';

const SkillDetails = () => {
    const data = useLoaderData();
    const {skillId} = useParams();
    const [skilled, setSkilled] = useState('')
    // console.log(data, skillId);

    useEffect(()=>{
        const skillDetails = data.find((singleSkill) => singleSkill.skillId == skillId);
        setSkilled(skillDetails)
    },[data, skillId])

    return (
        <div>
            <main className='w-11/12 mx-auto'>
                <SkillDetailsCard skilled={skilled}></SkillDetailsCard>
                <BookForm></BookForm>
            </main>
        </div>
    );
};

export default SkillDetails;