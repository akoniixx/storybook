import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';

export default  (props) => {
    props = {
        ...props,
        unit: 'Meters',
        fraction: 2,
        description: 'Realtime Water Level'
    }
    
    return (
        <Prototype {...props} >
            <DistanceWrapper>
                <Water  />
            </DistanceWrapper>
        </Prototype>
    );
}





const DistanceWrapper = styled.div`
width: 170px;
height: 100px;
    border-left: 1px solid #FFFFFF;
    border-bottom:1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    position:relative;
`;

const Water = styled.div`
width: 168px;
height: 80px;
background-image: linear-gradient(#2B90C4, #2C68A100);
position:absolute;
bottom:0;

    
`;
