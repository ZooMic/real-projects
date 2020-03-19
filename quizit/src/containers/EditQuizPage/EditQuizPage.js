import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SubLayout from '../../components/SupLayout';
import SupTitle from '../../components/SupTitle';
import SupContent from '../../components/SupContent';
import SupSpliter from '../../components/SupSpliter';
import { Input, TextArea } from '../../components/Input';
import { Button as AntButton } from 'antd';

import Button, { Group, XSMALL, SMALL, NEUTRAL, NEGATIVE, POSITIVE } from '../../components/Button';
import { useQuizSelector } from '../../reducers/quizes/quizesSelectors';

import { contentWrapper, inputWrapper, bordered, sideBtn, checkboxButton, green, red, grey, addBtn, removeBtn } from './EditQuizPage.module.css';

const mock = {
    question: 'Do SOR zgłosił się 35-letni chory o masie 70kg po obustronnej nefrektomii, z towarzyszącą od kilku godzin gorączką do 38 stopni C. Pacjent oddał jeden uformowany stolec. Jeśli w obliczeniach pominiemy wodę metaboliczną (oksydacyjną) - ile chory powinien otrzymać płynów, aby uzyskać „zerowy” bilans płynów.',
    answers: [
        { text: '100 ml', correct: false },
        { text: 'braku możliwości stosowania skutecznej antykoncepcji u kobiet', correct: true },
    ]
}

const EditQuizPage = () => {
    const { quizId } = useParams();
    const { name } = useQuizSelector(quizId);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([{ text: '', correct: true }, { text: '', correct: false }]);

    const handleQuestionChange = event => {
        const value = event.target.value;
        setQuestion(value);
    };

    const handleAnswerChange = event => {
        const value = event.target.value;
        const answerId = event.target.name;
        const answer = answers[answerId];
        const newAnswers = [...answers];
        if (answer) {
            newAnswers[answerId] = { ...answer, text: value };
        } else {
            newAnswers.push({
                text: value,
                correct: false,
            });
        }
        setAnswers(newAnswers);
    }

    const handleAnswerButton = event => {
        const answerId = event.target.name;
        const answer = answers[answerId];
        if (answer) {
            const newAnswers = [...answers];
            newAnswers[answerId] = { ...answer, correct: !answer.correct };
            setAnswers(newAnswers);
        }
    }

    const handleAddAnswer = () => {
        const newAnswers = [...answers, {
            text: '',
            correct: false,
            removeOnBlue: true,
        }];
        setAnswers(newAnswers)
    }

    const handleRemoveAnswer = event => {
        const answerId = event.target.name;
        const answer = answers[answerId];
        if (answer) {
            const newAnswers = [...answers];
            newAnswers.splice(Number(answerId), 1);
            setAnswers(newAnswers);
        }
        
    }

    return (
        <SubLayout>
            <SupTitle>Edit questions</SupTitle>
            <SupContent className={contentWrapper}>
                <TextArea />
                <div className={inputWrapper}>
                    <label htmlFor="question">Question:</label>
                    <TextArea id="question" rows="5" value={question} onChange={handleQuestionChange} />
                </div>
                {
                    answers.map(({ text, correct }, id) => (
                        <div className={inputWrapper} key={`answer-${id}`}>
                            <label htmlFor={id}>{id + 1})&nbsp;</label>
                            <Input name={id} id={id} value={text} onChange={handleAnswerChange}/>
                            {/* <input className={bordered} type="text" name={id} id={id} value={text} onChange={handleAnswerChange} /> */}
                            <Button size={XSMALL} color={correct ? POSITIVE : NEGATIVE} onClick={handleAnswerButton} name={id} className={sideBtn}/>
                            <Button size={XSMALL} color={NEGATIVE} onClick={handleRemoveAnswer} name={id} className={sideBtn}>X</Button>
                        </div>
                    ))
                }
                <AntButton type="dashed">ADD ANSWER</AntButton>
                <Group>
                    <Button size={SMALL} onClick={handleAddAnswer}>ADD ANSWER</Button>
                    <Button size={SMALL} color={NEUTRAL} onClick={x => x}>SAVE QUESTION</Button>
                </Group>
                <SupSpliter/>
                <span>{name}</span>
                <Button size={SMALL} color={NEUTRAL} onClick={x => x}>Open question list</Button>
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