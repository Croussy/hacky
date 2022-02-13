import React, {useEffect, useState} from 'react';
import MissionIntro from "../mission-common/MissionIntro";
import {useSelector} from "react-redux";
import '../../styles/mission1/mission1.css'
import Mission1Content from "./Mission1Content";

const Mission1 = ({missionID}) => {
    const [stepMission, setStepMission] = useState(1)
    const [mission, setMission] = useState({})
    const missions = useSelector(state => state.missionReducer)

    useEffect(() => {
        const mission_tmp = missions.find(mission => mission._id === missionID)
        setMission(mission_tmp)
    }, [missionID])

    const handleClickNextIntro = () => {
        setStepMission(2)
    }

    let displayedComponent = ''
    switch (stepMission) {
        case 1:
            displayedComponent = <MissionIntro mission={mission} handleClick={handleClickNextIntro}/>
            break
        case 2:
            displayedComponent = <Mission1Content mission={mission}/>
            break

    }
    return (
        <div className={'mission1-container'}>
            {displayedComponent}
        </div>
    );
};

export default Mission1;