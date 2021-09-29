import styled from "styled-components"

const RecordBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    background-color: #d1d1d1;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    min-height: 620px;

    @media (max-width:400px){
        justify-content: flex-start;
    }
`

const Msg = styled.h3`
    color:#252525;
`

function BlankPage(){

    return (
        <>
            <RecordBox className="recordBox">
                <Msg className="msgBlank" id='msg'>Escolha uma das opções para manter o cadastro</Msg>            
            </RecordBox>
        </>
    )
}

export default BlankPage