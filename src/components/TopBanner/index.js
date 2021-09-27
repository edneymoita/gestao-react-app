import styled from 'styled-components'

const Banner = styled.div`
    display: flex;
    background-color: #2f6d74;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
`

const BannerTitle = styled.h2`
    font-size: 30px;
    color: #ffffff;
    text-align: center;
`

function TopBanner(){
    return (
        <>
            <Banner>
                <div></div>
                <BannerTitle>
                    Gestão de Cadastro<br />
                    Clientes e Produtos
                </BannerTitle>
                <div></div>
            </Banner>
        </>
    )
  }
  
export default TopBanner  