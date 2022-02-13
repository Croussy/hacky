import React from 'react';
import Mission1Browser from "./Mission1Browser";

const Mission1Content = ({mission}) => {
    return (
        <div className={'mission1-content'}>
            <Mission1Browser data={mission.specificData.dataFakeSocialNetwork}/>
        </div>
    );
};

export default Mission1Content;