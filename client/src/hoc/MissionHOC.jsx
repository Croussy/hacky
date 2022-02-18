import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const MissionHOC = WrappedComponent => (
    ({missionID, handleClickForNextMission}) => {
        const [stepMission, setStepMission] = useState(1)
        const [mission, setMission] = useState({})
        const missions = useSelector(state => state.missionReducer)
        useEffect(() => {
            const mission_tmp = missions.find(mission => mission._id === missionID)
            setMission(mission_tmp)
        }, [missionID])

        const handleSetStepMission = step => {
            setStepMission(step)
        }

        return (
            <WrappedComponent
                mission={mission}
                stepMission={stepMission}
                handleSetStepMission={handleSetStepMission}
                handleClickForNextMission={handleClickForNextMission}>
            </WrappedComponent>
        )
    }
)

export default MissionHOC;