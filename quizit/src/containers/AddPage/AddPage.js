import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import SubLayout from '../../components/SupLayout/';
import { useTextValidator, useRouteNormalizer } from '../../custom-hooks/';
import { form, title, quizNameBox, valid } from './AddPage.module.css';

const AddPage = () => {
    const [quizName, setQuizName] = useState('');
    const quizNameIsValid = useTextValidator(quizName, /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)
    const normalizedQuizName = useRouteNormalizer(quizName)

    const onQuizNameChanged = event => {
        const newQuizName = event.target.value;
        setQuizName(newQuizName)
    }

    const onSubmit = event => {
        event.preventDefault()
    }

    return (
        <SubLayout>
            <form className={form} onSubmit={onSubmit}>
                <span className={title}>Add new quiz</span>
                <div className={`${quizNameBox} ${quizNameIsValid ? valid : ''}`}>
                    <label htmlFor="quiz-name">How would you like to name your quiz?</label>
                    <input type="text" name="quiz-name" id="quiz-name" value={quizName} onChange={onQuizNameChanged} />
                </div>
                <input type="submit" value="Add" />
                {/* SHOULD BE DISABLED UNTIL ADD IS NOT CLICKED, OR SHOULD BE INSTEAD OF ADD */}
                <NavLink className={``} to={`/edit/${normalizedQuizName}`}>Add some questions</NavLink>
            </form>
        </SubLayout>
    )
}

export default AddPage;

            // {/* input question */}
            // {/* input answer 1* [checkbox for correct answer]*/}
            // {/* input add new answer, on focus another below appears */}
            // {/* SUBBMIT ADD/SAVE ETC.*/}
            // /**
            //  *          <div className="added-section">
            //             <div>id, question..., [REMOVE] [EDIT]</div>
            //             </div>
            //  */