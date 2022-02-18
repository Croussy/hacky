import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import '../../styles/mission1/mission1.css'
import Mission1Content from "./Mission1Content";
import Mission1Success from "./Mission1Success";
import Mission1Explanation from "./Mission1Explanation";
import {addMissionAchieved, addScoreToPlayer, removeScoreToPlayer} from "../../actions/player.actions";
import MissionHOC from "../../hoc/MissionHOC";
import MissionIntro from "../mission-common/MissionIntro";

const Mission1 = ({mission, stepMission, handleSetStepMission, handleClickForNextMission}) => {
    const [userPassword, setUserPassword] = useState('')
    const [isUserPasswordInvalid, setIsUserPasswordInvalid] = useState(false)
    const dispatch = useDispatch()

    const handleClickNext = () => {
        const new_steps = stepMission + 1
        handleSetStepMission(new_steps)
        switch (new_steps) {
            case 2:
                dispatch(addScoreToPlayer(5000))
                break
        }
    }
    const handleChangeUserPassword = (e) => {
        setUserPassword(e.target.value)
    }
    const handleSubmitUserPassword = (e) => {
        e.preventDefault()
        if (userPassword !== mission.specificData.passToFind) {
            setIsUserPasswordInvalid(true)
            dispatch(removeScoreToPlayer(250))
        } else {
            dispatch(addMissionAchieved(mission._id))
            setIsUserPasswordInvalid(false)
            handleSetStepMission(3)
        }
    }

    let displayedComponent = ''
    const pseudoVictim = mission && mission.specificData && mission.specificData.dataFakeSocialNetwork.firstName
    const rules = <p>5 000 points vont vous être attribués dès le départ de la mission. À chaque tentative ratée, vous
        perdrez des points -250 points. (score min 500 pts)</p>
    switch (stepMission) {
        case 1:
            displayedComponent = <MissionIntro missionRules={rules} mission={mission} handleClick={handleClickNext}/>
            break
        case 2:
            displayedComponent = <Mission1Content userPassword={userPassword}
                                                  handleChangePassword={handleChangeUserPassword}
                                                  isUserPasswordInvalid={isUserPasswordInvalid}
                                                  handleSubmitPasswordCheck={handleSubmitUserPassword}
                                                  mission={mission}/>
            break
        case 3:
            displayedComponent = <Mission1Success pseudo={pseudoVictim} handleclick={handleClickNext}/>
            break
        case 4:
            displayedComponent = <Mission1Explanation pseudo={pseudoVictim} handleclick={handleClickForNextMission}/>
            break

    }
    return (
        <div className={'mission1-container'}>
            {displayedComponent}
        </div>
    );
};

const WrappedComponent = MissionHOC(Mission1)
export default WrappedComponent;