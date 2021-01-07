import React, {useState} from 'react'
import styled from 'styled-components'
import {Data} from './Data';
import {IconContext} from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import {motion} from 'framer-motion'


const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height:100vh;
    
`;
const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;
    h1{
        padding: 2rem;
        font-size: 2rem;
    };
    span{
        margin-right: 1.5rem;
    };
`;

const Dropdown = styled(motion.div)`
    
    background: #00ffb9;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #272727;
    border-left: 5px solid #272727;
    border-right: 5px solid #272727;
    border-radius: 0px 0px 20px 20px;
   
    

    p{
        font-size: 2rem;
        color:  #272727;
    }


`

const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index){
            // if clicked question is already active, then close it
            return setClicked(null)
        }
        setClicked(index)
    }

    const drop = {
        hidden: {
            opacity: 0, y:-50, 
        },
        visible: {
            opacity:1, y:0, 
            transition:{duration:0.5 ,delay:0.1}
        }
    }

    return (
        <div>
            <IconContext.Provider value={{color: '#00FFB9',
            size: '25px'}}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                            {clicked === index ? (
                                <Dropdown
                                    variants={drop}
                                    initial="hidden"
                                    animate="visible">
                                <p>{item.answer}</p>
                                </Dropdown>
                            ): null}
                                
                               
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
            </IconContext.Provider>
        </div>
    )
}

export default Accordion
