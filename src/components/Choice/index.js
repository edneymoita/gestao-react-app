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
`

const ChoiceContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & img {
        cursor: pointer;
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
                            <b>Escolha uma das opções abaixo<br />
                            para realizar a manutenção do cadastro</b>
                        </ChoiceTitle>

                        <ChoiceContent>
                            <div>
                                <NavLink to='/client'>
                                <figure>
                                <img
                                    src={customer} 
                                    alt='Cliente'
                                    width={100}
                                    height={100}
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
                                <img 
                                    src={product} 
                                    alt='Produtos'
                                    width={100}
                                    height={100}
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