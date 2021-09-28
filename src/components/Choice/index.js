import styled from 'styled-components'
import customer from '../../assets/image/elements/couple.png'
import product from '../../assets/image/elements/market.png'
import { Route, NavLink, HashRouter } from "react-router-dom"
import ClientInput from '../ClientInput'
import ProductInput from '../ProductInput'
import BlankPage from '../BlankPage'

const Box = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: left;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
    }
`

const ChoiceBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    border-radius: 10px;
    border: 3px solid #2f6d74;
`

const ChoiceTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    color: #003d45;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 15px;
        font-weight: 400;
    }

    @media (max-width: 400px) {
        font-size: 10px;
        font-weight: 400;
`

const ChoiceContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & img {
        cursor: pointer;
    }

    @media (max-width: 700px) {
        flex-direction: row;
    }
`

const Image = styled.img`
    width: 150px;
    height: auto;

    @media (max-width: 700px) {
        width: 80px;
    }

    @media (max-width: 400px) {
        width: 60px;
    }
`

const TextLn1 = styled.p`
    color: #003d45;
`

function Choice(){
    return (
        <>
            <HashRouter>
                <Box>
                    <ChoiceBox>
                        <ChoiceTitle>
                            <b>Escolha uma das opções abaixo para realizar a manutenção do cadastro</b>
                        </ChoiceTitle>

                        <ChoiceContent>
                            <div>
                                <NavLink to='/client'>
                                <figure>
                                <Image
                                    src={customer} 
                                    alt='Cliente'
                                />
                                </figure>
                                <figcaption>
                                    <TextLn1>Clientes</TextLn1>
                                </figcaption>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to='/product'>
                                <figure>
                                <Image
                                    src={product} 
                                    alt='Produtos'
                                />
                                </figure>
                                <figcaption>
                                    <TextLn1>Produtos</TextLn1>
                                </figcaption>
                                </NavLink>
                            </div>
                        </ChoiceContent>
                    </ChoiceBox>
                    <div>
                        <Route exact path="/" component={BlankPage}/>
                        <Route path="/client" component={ClientInput}/>
                        <Route path="/product" component={ProductInput}/>
                    </div>
                </Box>
            </HashRouter>
        </>
    )
  }
  
export default Choice