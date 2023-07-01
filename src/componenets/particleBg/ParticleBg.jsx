import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from '../particleConfig/particleConfig';

const particleBg = () => {
    return (
        <div>
            <Particles params={particleConfig}></Particles>
        </div>
    );
};

export default particleBg;