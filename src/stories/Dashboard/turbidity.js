import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';
import img from '../../assets/good-face.svg';


 export default  (props) => {
    props = {
        ...props,
        unit: 'NTUs',
        fraction: 0,
        description: 'Realtime Turbidity'
    }
    const { value, critical_min = null, critical_max = null } = props;
    return (
        <Prototype {...props}>
            <FaceWrapper>
                {/* <Face src={`assets/img/${isInCriticalZone ? 'bad' : 'good'}-face.svg`} /> */}
                <Face src={img} />
            </FaceWrapper>
        </Prototype>
    );
}


const FaceWrapper = styled.div`
width: 100%;
margin: auto 0;
display: flex;
justify-content: center;
& > *:not(:first-child) {
    margin-left: 10px;
}
`;

const Face = styled.img`
object-fit: contain;
margin: 20px;
margin-top: 40px;
width: 150px;
height: 150px;
`;