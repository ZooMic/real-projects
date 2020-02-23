import React from 'react';
import { useParams } from 'react-router-dom';
import SubLayout from '../../components/SupLayout/';
import SupTitle from '../../components/SupTitle/';
import SupContent from '../../components/SupContent/';
import SupSpliter from '../../components/SupSpliter';

import { contentWrapper, inputWrapper, bordered, checkboxButton, green, red } from './EditQuizPage.module.css';


const EditQuizPage = () => {
    const { quizId } = useParams();
    return (
        <SubLayout>
            <SupTitle>Edit questions</SupTitle>
            <SupContent className={contentWrapper}>
                <div className={inputWrapper}>
                    <label htmlFor="question">Question:</label>
                    <textarea className={bordered} id="question" rows="5"></textarea>
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">1)&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" />
                    <button className={`${checkboxButton} ${green}`} />
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">2)&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" />
                    <button className={`${checkboxButton} ${red}`} />
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">+&nbsp;&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" />
                    <button className={`${checkboxButton} ${red}`} />
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">+&nbsp;&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" />
                    <button className={`${checkboxButton} ${red}`} />
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">+&nbsp;&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" />
                    <button className={`${checkboxButton} ${red}`} />
                </div>
                <button>ADD</button>
                <SupSpliter/>
                {/* TODO - change id to normal name, from redux state*/}
                <span>{quizId}</span>
                <span>Show questions list - link</span>
            </SupContent>
        </SubLayout>
    )
}

export default EditQuizPage;

/**
 * Insert question:
 * Answer 1: [      ]
 * Answer 2: []()
 * Answer +: []()
 * Save
 */

  // {/* input question */}
            // {/* input answer 1* [checkbox for correct answer]*/}
            // {/* input add new answer, on focus another below appears */}
            // {/* SUBBMIT ADD/SAVE ETC.*/}
            // /**
            //  *          <div className="added-section">
            //             <div>id, question..., [REMOVE] [EDIT]</div>
            //             </div>
            //  */