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
`

const Msg = styled.h3`
    color:#ff0000;
    padding-top: 10px;
`

function BlankPage(){

    return (
        <>
            <RecordBox>
                <Msg id='msg'>Escolha sua opção ao lado</Msg>            
            </RecordBox>
        </>
    )
}

export default BlankPage