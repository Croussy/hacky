import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../styles/mission1/mission1.css'
import Mission1Content from "./Mission1Content";
import Mission1Success from "./Mission1Success";
import Mission1Explanation from "./Mission1Explanation";
import Mission1Rules from "./Mission1Rules";
import {addMissionAchieved, addScoreToPlayer, removeScoreToPlayer} from "../../actions/player.actions";

const Mission1 = ({missionID, handleClickForNextMission}) => {
    const [stepMission, setStepMission] = useState(1)
    const [mission, setMission] = useState({})
    const missions = useSelector(state => state.missionReducer)
    const [userPassword, setUserPassword] = useState('')
    const [isUserPasswordInvalid, setIsUserPasswordInvalid] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        const mission_tmp = missions.find(mission => mission._id === missionID)
        setMission(mission_tmp)
    }, [missionID])

    const handleClickNext = () => {
        const new_steps = stepMission + 1
        setStepMission(new_steps)
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
            setStepMission(3)
        }
    }

    let displayedComponent = ''
    const pseudoVictim = mission.specificData && mission.specificData.dataFakeSocialNetwork.firstName
    switch (stepMission) {
        case 1:
            displayedComponent = <Mission1Rules mission={mission} handleClick={handleClickNext}/>
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

export default Mission1;