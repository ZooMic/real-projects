import React from 'react';
import { useParams } from 'react-router-dom';
import SubLayout from '../../components/SupLayout';
import SupTitle from '../../components/SupTitle';
import SupContent from '../../components/SupContent';
import SupSpliter from '../../components/SupSpliter';
import Button, { SMALL } from '../../components/Button';

import { contentWrapper, inputWrapper, bordered, checkboxButton, green, red, addBtn } from './EditQuizPage.module.css';

const mock = {
    question: 'Do SOR zgłosił się 35-letni chory o masie 70kg po obustronnej nefrektomii, z towarzyszącą od kilku godzin gorączką do 38 stopni C. Pacjent oddał jeden uformowany stolec. Jeśli w obliczeniach pominiemy wodę metaboliczną (oksydacyjną) - ile chory powinien otrzymać płynów, aby uzyskać „zerowy” bilans płynów.',
    answers: [
        { text: '100 ml', correct: false },
        { text: 'braku możliwości stosowania skutecznej antykoncepcji u kobiet', correct: true },
    ]
}

const EditQuizPage = () => {
    const { quizId } = useParams();
    return (
        <SubLayout>
            <SupTitle>Edit questions</SupTitle>
            <SupContent className={contentWrapper}>
                <div className={inputWrapper}>
                    <label htmlFor="question">Question:</label>
                    <textarea className={bordered} id="question" rows="5" value={mock.question}></textarea>
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">1)&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" value={mock.answers[0].text}/>
                    <button className={`${checkboxButton} ${mock.answers[0].correct ? green: red}`} />
                </div>
                <div className={inputWrapper}>
                    <label htmlFor="answer1">2)&nbsp;</label>
                    <input className={bordered} type="text" name="answer1" id="answer1" value={mock.answers[1].text}/>
                    <button className={`${checkboxButton} ${mock.answers[1].correct ? green: red}`} />
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
                <Button size={SMALL} className={addBtn}>ADD</Button>
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