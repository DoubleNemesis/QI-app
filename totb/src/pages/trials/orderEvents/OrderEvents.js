import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { orderEventsData } from '../../../data/lessonData'
import { EventsContainer, ParagraphContainer } from './orderEventsComponents/OrderEventsComponents'
import GameContext from '../../../context/GameContext'
import Simple from './Simple'


function Redacted() {

 
    const { level, setLevel } = useContext(GameContext)
    const [aMessage, setAMessage] = useState('')


  
    
    function check(){
        setAMessage(!aMessage)
    }

    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={ProfilePic} />
                    {/* https://unsplash.com/@shnautsher */}
                    <TaskBox>
                        Break the code!
                    </TaskBox>
                </Instructions>
                <Conversation>
                    <SpeechBubbleLeft>
                        {/* {instructions} */}
                    </SpeechBubbleLeft>
                <ParagraphContainer>
                    This is going to be the para of text
                    
                    <button onClick={check}>check</button>
                </ParagraphContainer>

                    <EventsContainer>
                    <Simple />
                    {aMessage ? 'hi' : 'bye'}
                    </EventsContainer>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default Redacted