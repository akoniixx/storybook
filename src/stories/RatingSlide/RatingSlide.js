import React from 'react';
import { Slide,Fade } from 'react-slideshow-image';
import styled from 'styled-components';
import {
    SubContainer,
    OrangeVerticalLine,
    RowContainer
} from './Container';
import {flexBoxColCenter,flexBoxCenter,flexBox,flexBoxCol} from './FlexBox';

import star from '../../assets/star.png';
import halfstar from '../../assets/half_star.png';
import em1 from '../../assets/employee1.svg';
import em2 from '../../assets/employee2.svg';
import em3 from '../../assets/employee3.svg';


// styled
const Star = styled.img`
width: 10px;
height: 10px;
margin-left: 3px;
margin-right: 3px;
`;



const ProfileContainer = styled(flexBoxColCenter)`
`;

const CommentContainer = styled(flexBoxCol)`
`;

const StarContainer = styled(flexBoxCenter)`
`;


 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex-1} to ${newIndex-1}`);
  }
}

export default ()=> {
    
        return (
            <div style={{
                width: '80%'
            }}>
                <div className="slide-container">
                    <Fade {...properties}>

                    <div className="each-slide" style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignContent:'center',
                        margin:'32px'
                    }}>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src={em1} style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={halfstar}/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        font: '1.375rem/1.25rem Helvetica Neue Bold',
                                        color: '#FFFFFF'
                                    }}>
                                        Customer
                                    </span>
                                    <span style={{
                                        paddingTop: 10,
                                        color: '#A8A8A8',
                                        font: '100 1.125rem/1.25rem Kanit'
                                    }}>
                                        Perfect
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src={em2} style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        font: '1.375rem/1.25rem Helvetica Neue Bold',
                                        color: '#FFFFFF'
                                    }}>
                                        The Boss
                                    </span>
                                    <span style={{
                                        paddingTop: 10,
                                        color: '#A8A8A8',
                                        font: '100 1.125rem/1.25rem Kanit'
                                    }}>
                                        Good jobs
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src={em3} style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={halfstar}/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                
                        </RowContainer>
                    </div>

                    <div className="each-slide" style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignContent:'center',
                        margin:'32px'
                    }}>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src={em2} style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        font: '1.375rem/1.25rem Helvetica Neue Bold',
                                        color: '#FFFFFF'
                                    }}>
                                        The Boss
                                    </span>
                                    <span style={{
                                        paddingTop: 10,
                                        color: '#A8A8A8',
                                        font: '100 1.125rem/1.25rem Kanit'
                                    }}>
                                        Good jobs
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src={em3} style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={halfstar}/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        font: '1.375rem/1.25rem Helvetica Neue Bold',
                                        color: '#FFFFFF'
                                    }}>
                                        Employee
                                    </span>
                                    <span style={{
                                        paddingTop: 10,
                                        color: '#A8A8A8',
                                        font: '100 1.125rem/1.25rem Kanit'
                                    }}>
                                        Cool
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src={em1} style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={star}/>
                                    <Star src={halfstar}/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                
                        </RowContainer>
                    </div>
                    </Fade>
                </div>
            </div>
        );
    }
