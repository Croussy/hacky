import React, {useState} from 'react';
import MissionQuestionQuizz from "./MissionQuestionQuizz";
import '../../../styles/mission-quizz.css'

const MissionQuizz = ({questions, handleIsCorrectAnswer, handleEndQuizz}) => {
    const [indexQuestion, setIndexQuestion] = useState(0)
    const nextQuestion = () => {
        const nextIndex = indexQuestion + 1
        if (nextIndex < questions.length) {
            setIndexQuestion(nextIndex)
        } else {
            handleEndQuizz()
        }
    }
    return (
        <div className={'mission-quizz-container'}>
            <div className={'mission-quizz-title'}>Quizz</div>
            <div className={'mission-quizz-question-container'}>
                <div className={'mission-quizz-length'}>
                    {`${indexQuestion + 1} / ${questions.length}`}
                </div>
                <MissionQuestionQuizz question={questions[indexQuestion]}
                                      handleClick={nextQuestion}
                                      handleIsCorrectAnswer={handleIsCorrectAnswer}/>
            </div>
        </div>
    );
};

export default MissionQuizz;