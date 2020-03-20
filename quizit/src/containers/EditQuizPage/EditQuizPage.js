import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SubLayout from '../../components/SupLayout';
import SupTitle from '../../components/SupTitle';
import SupContent from '../../components/SupContent';
import SupSpliter from '../../components/SupSpliter';
import { message } from 'antd';
import { CheckSquareOutlined, CloseSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Input, TextArea, NavLink } from '../../components/CustomAnt';
import { useQuizSelector } from '../../reducers/quizes/quizesSelectors';
import { contentWrapper, inputWrapper, details, boldText, answerLabel, flex } from './EditQuizPage.module.css';

const EditQuizPage = () => {
    const { quizId } = useParams();
    const { name } = useQuizSelector(quizId);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
    ]);

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

    const saveQuestion = event => {
        // save
        // clear
        // added message 
        message.success('Question added!')
    }

    return (
        <SubLayout>
            <SupTitle>Edit questions</SupTitle>
            <SupContent className={contentWrapper}>
                <div className={inputWrapper}>
                    <label htmlFor="question">Question:</label>
                    <TextArea id="question" rows="3" value={question} onChange={handleQuestionChange} />
                </div>
                {
                    answers.map(({ text, correct }, id) => (
                        <div className={inputWrapper} key={`answer-${id}`}>
                            <label className={answerLabel} htmlFor={id}>{id + 1})&nbsp;</label>
                            <Input name={id} id={id} value={text} onChange={handleAnswerChange}/>
                            <div className={flex}>
                                <Button
                                    type={correct ? "primary" : null}
                                    icon={correct ? <CheckSquareOutlined /> : <CloseSquareOutlined/> }
                                    green={correct}
                                    danger={!correct}
                                    onClick={handleAnswerButton}
                                    name={id}
                                    size="large"
                                />
                                <Button
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                    danger
                                    onClick={handleRemoveAnswer}
                                    name={id}
                                    size="large"
                                />
                            </div>
                        </div>
                    ))
                }
                <Button type="dashed" block green onClick={handleAddAnswer}>ADD ANSWER</Button>
                <Button type="primary" block green onClick={saveQuestion}>SAVE QUESTION</Button>
                <SupSpliter/>
                <div className={details}>
                    <span>Details:</span>
                    <ul>
                        <li><span>Quiz name: <span className={boldText}>{name}</span></span></li>
                        <li><span>Number of questions: <span className={boldText}>123</span> </span></li>
                    </ul>
                </div>
                <NavLink to={`/edit/${quizId}/list`}>OPEN QUESTIONS LIST</NavLink>
            </SupContent>
        </SubLayout>
    );
}

export default EditQuizPage;