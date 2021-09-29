import styled from "styled-components"

const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #c1c1c1;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0px 20px 0px;
`

function Footer(){
    return (
        <>
            <FooterBox className="banner">
            </FooterBox>
        </>
    )
}

export default Footer