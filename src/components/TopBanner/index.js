import styled from 'styled-components'

const Banner = styled.div`
    display: flex;
    background-color: #c1c1c1;
    justify-content: space-between;
`

const BannerTitle = styled.h2`
    font-size: 30px;
    color: #252525;
    text-align: center;

    @media (max-width:400px) {
        font-size: 25px;
    }
`

const ChangeMode = styled.input`
    background-color: #0c0c0c;
    color: #ffffff;
    border-radius: 8px;
    height: 30px;
    align-self: flex-start;
    margin: 10px 10px 0 0;
    min-width: 100px;

    &:hover {
        cursor: pointer;
    }
`

function TopBanner(){
    return (
        <>
            <Banner className="banner">
                <div></div>
                <BannerTitle className="bannerTitle">
                    Gestão de Cadastro<br />
                    Clientes e Produtos
                </BannerTitle>
                <div>
                    <ChangeMode className="buttonMode" type='button' value={"Modo escuro"} id='changeMode' onClick={() => {
                        document.body.classList.toggle("darkMode");

                        if (document.getElementById("changeMode").value === 'Modo escuro')
                            document.getElementById("changeMode").value = 'Modo claro'
                        else
                            document.getElementById("changeMode").value = 'Modo escuro'
                    }}/>
                </div>
            </Banner>
        </>
    )
  }
  
export default TopBanner  