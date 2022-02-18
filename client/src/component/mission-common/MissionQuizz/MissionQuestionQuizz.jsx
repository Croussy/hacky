import React, {Fragment, useEffect, useState} from 'react';
import MissionQuizzAnswer from "./MissionQuizzAnswer";

const MissionQuestionQuizz = ({question, handleClick, handleIsCorrectAnswer}) => {
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')

    useEffect(() => {
        setIsCorrectAnswer(false)
        setUserAnswer('')
    }, [question])

    const explanationContainerClass = userAnswer !== '' ? 'displayed' : ''
    const explanationContent = userAnswer !== '' ? (
        <Fragment>
            <div className={'label-state-answer'}>{isCorrectAnswer ? 'Bonne réponse' : 'Mauvaise réponse'}</div>
            <div className={'content'}>{question.explanation}</div>
        </Fragment>
    ) : ''

    const btnNextQuestion = userAnswer !== '' ?
        <button className={'next-button'} onClick={handleClick}>Question suivantes</button> : ''

    const handleClickAnswer = (e) => {
        if (userAnswer !== '')
            return

        const answer = e.target.dataset.index
        const isCorrect = parseInt(answer) === question.correctAnswerIndex
        setUserAnswer(answer)
        setIsCorrectAnswer(isCorrect)
        if (isCorrect) {
            handleIsCorrectAnswer()
        }
    }

    const computeExtraClassAnswer = (index) => {
        if (userAnswer === '')
            return ''

        if (parseInt(userAnswer) === index) {
            return isCorrectAnswer ? 'success' : 'failed'
        }
        if (!isCorrectAnswer && question.correctAnswerIndex === index) {
            return 'success'
        }
        return ''
    }

    const answer = question.answers.map((text, index) => {
        const extraClass = computeExtraClassAnswer(index)
        return (
            <MissionQuizzAnswer key={index}
                                extraClass={extraClass}
                                text={text}
                                index={index}
                                handleClick={handleClickAnswer}/>
        )
    })

    return (
        <div className={'mission-quizz'}>
            <div className={'mission-quizz-question'}>{question.text}</div>
            <div className={'mission-quizz-answers'}>{answer}</div>
            <div className={`mission-quizz-explanation-container ${explanationContainerClass}`}
                 data-correct-answer={isCorrectAnswer}>
                {explanationContent}
            </div>
            <div className={'btn-next-question-container'}>
                {btnNextQuestion}
            </div>
        </div>
    );
};

export default MissionQuestionQuizz;