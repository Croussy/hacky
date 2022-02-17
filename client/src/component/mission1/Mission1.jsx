import React, {useEffect, useState} from 'react';
import MissionIntro from "../mission-common/MissionIntro";
import {useSelector} from "react-redux";
import '../../styles/mission1/mission1.css'
import Mission1Content from "./Mission1Content";
import Mission1Success from "./Mission1Success";
import Mission1Explanation from "./Mission1Explanation";

const Mission1 = ({missionID}) => {
    const [stepMission, setStepMission] = useState(1)
    const [mission, setMission] = useState({})
    const missions = useSelector(state => state.missionReducer)
    const [userPassword, setUserPassword] = useState('')
    const [isUserPasswordInvalid, setIsUserPasswordInvalid] = useState(false)

    useEffect(() => {
        const mission_tmp = missions.find(mission => mission._id === missionID)
        setMission(mission_tmp)
    }, [missionID])

    const handleClickNext = () => {
        setStepMission(stepMission + 1)
    }
    const handleChangeUserPassword = (e) => {
        setUserPassword(e.target.value)
    }
    const handleSubmitUserPassword = (e) => {
        e.preventDefault()

        if (userPassword !== mission.specificData.passToFind) {
            setIsUserPasswordInvalid(true)
        } else {
            setIsUserPasswordInvalid(false)
            setStepMission(3)
        }
    }

    let displayedComponent = ''
    const pseudoVictim = mission.specificData && mission.specificData.dataFakeSocialNetwork.firstName
    switch (stepMission) {
        case 1:
            displayedComponent = <MissionIntro mission={mission} handleClick={handleClickNext}/>
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
            displayedComponent = <Mission1Explanation pseudo={pseudoVictim} handleclick={handleClickNext}/>
            break

    }
    return (
        <div className={'mission1-container'}>
            {displayedComponent}
        </div>
    );
};

export default Mission1;