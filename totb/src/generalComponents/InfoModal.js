import styled from 'styled-components'

export const StyledModal = styled.div`
position: absolute;
background-color: #2E2523;
/* background: linear-gradient(#666, #2E2523, #666); */
background-color: transparent;
color: white;
z-index: 5;
display: ${({ display }) => display};
left:0;
right:0;
margin-left:auto;
margin-right:auto;
top: 30%;
font-size: 1rem;
width: 95%;
padding: .5em;
/* border: 3px solid red; */
border-radius: 5px;
/* padding: 1em; */
/* box-shadow: 4px 4px 3px #666; */
/* width: 80%; */
/* display: flex;
flex-direction: column; */
/* img{   
    border: 1px red solid;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
} */

h2{
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: .6em .5em;
    font-size: 2rem;
}

`

export const ToggleContainer = styled.div `
display: flex;
margin: 2em 0;
`

    export const ToggleTaskInfo = styled.button`
position: relative;
font-size: 1.2rem;
font-weight: 700;
z-index: 2;
color: #333;
margin: 0 auto;
padding: .3em 3em;
text-transform: uppercase;
`
