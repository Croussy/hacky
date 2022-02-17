import React from 'react';
import MissionIntro from "../../hoc/MissionIntro";

const Mission1Rules = () => {
    return (
        <div className={'mission1-rules'}>
            <p>5 000 points vont vous être attribués dès le départ de la mission. À chaque tentative ratée, vous perdrez des points -250 points. (score min 500 pts)</p>
        </div>
    );
};

const WrappedComponent = MissionIntro(Mission1Rules)
export default WrappedComponent;