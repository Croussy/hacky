import React from 'react';
import Mission1Browser from "./Mission1Browser";
import Mission1CheckPassword from "./Mission1CheckPassword";

const Mission1Content = ({mission, handleChangePassword, userPassword, handleSubmitPasswordCheck, isUserPasswordInvalid}) => {
    return (
        <div className={'mission1-content'}>
            <Mission1Browser data={mission.specificData.dataFakeSocialNetwork}/>
            <Mission1CheckPassword handleChange={handleChangePassword}
                                   userPassword={userPassword}
                                   isInvalid={isUserPasswordInvalid}
                                   handleSubmit={handleSubmitPasswordCheck}/>
        </div>
    );
};

export default Mission1Content;