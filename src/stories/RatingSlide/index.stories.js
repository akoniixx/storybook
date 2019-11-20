import React from 'react';
import RatingContainer from './RatingSlide';
import {Container,ContainerWrapper,SubContainer,BlueHorizonLine,RowContainer,Star} from './Container';
import star from '../../assets/star.png';
import halfstar from '../../assets/half_star.png';
export default {
    title: 'RatingSlide'
};

export const RatingSlide =()=>  <ContainerWrapper style={{
    background: 'transparent radial-gradient(closest-side at 50% 50%, #393939 0%, #000000 100%) 0% 0% no-repeat padding-box'
}}>
    <Container>
        <span style={{
            color: '#FFFFFF',
            font: 'bold 2.5rem/4.75rem Helvetica'
        }}>
            TESTIMONIALS
            <BlueHorizonLine />
        </span>
        <SubContainer>
            <span style={{
                color: '#FFFFFF',
                marginRight: '24px',
                font: '6rem/7.1875rem Helvetica Neue Light'
            }}>
                4.3
            </span>
            <RowContainer>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star}/>
                <Star src={halfstar} />
            </RowContainer>
        </SubContainer>
        <span style={{
            color: '#D6D6D6',
            font: '1.4375rem/1.875rem Roboto'
        }}>
            FROM 3 CUSTOMERS
        </span>
        <RowContainer style={{
            width: '80%',
            position: 'relative',
            margin: 'auto'
        }}>
            <RatingContainer />
        </RowContainer>
    </Container>
</ContainerWrapper>