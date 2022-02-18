import React, {useState} from 'react';
import MissionHOC from "../../hoc/MissionHOC";
import '../../styles/mission2/mission2.css'
import MissionIntro from "../mission-common/MissionIntro";
import MissionQuizz from "../mission-common/MissionQuizz/MissionQuizz";
import {useDispatch} from "react-redux";
import {addMissionAchieved, addScoreToPlayer} from "../../actions/player.actions";
import Mission2Success from "./mission2Success";


const Mission2 = ({mission, stepMission, handleSetStepMission, handleClickForNextMission}) => {
    const [nbCorrectAnswer, setNbCorrectAnswer] = useState(0)
    const dispatch = useDispatch()

    const handleClickNext = () => {
        const new_steps = stepMission + 1
        handleSetStepMission(new_steps)
        if(new_steps === 3) {
            dispatch(addMissionAchieved(mission._id))
        }
    }

    const handleIsCorrectAnswer = () => {
        dispatch(addScoreToPlayer(250))
        setNbCorrectAnswer(nbCorrectAnswer + 1)
    }

    let displayedComponent = ''
    const rules = <p>Pour chaque bonne réponse, vous gagnerez 250 pts</p>
    switch (stepMission) {
        case 1:
            displayedComponent = <MissionIntro missionRules={rules} mission={mission} handleClick={handleClickNext}/>
            break
        case 2:
            displayedComponent = <MissionQuizz questions={mission.specificData.questions}
                                               handleIsCorrectAnswer={handleIsCorrectAnswer}
                                               handleEndQuizz={handleClickNext}/>
            break
        case 3:
            displayedComponent = <Mission2Success nbCorrectAnswer={nbCorrectAnswer}
                                                  total={mission.specificData.questions.length}
                                                  handleclick={handleClickForNextMission}/>
            break

    }
    return (
        <div className={'mission2-container'}>
            {displayedComponent}
        </div>
    );
};

const WrappedComponent = MissionHOC(Mission2)
export default WrappedComponent;