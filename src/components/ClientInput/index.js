import styled from "styled-components"
import React, { useState } from "react"

const InputBox = styled.input`
    border: 1px solid #3c9ca9;
    border-radius: 10px;
    height: 20px;
`

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

const RecordLabel = styled.label`
    text-align: left;
    color: #003d45;
    margin: 10px 10px 0px 10px;
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ActionButton = styled.button`
    background-color: #003d45;
    color:#ffffff;
    border-radius: 1rem;
    width: 200px;
    height: 40px;
    margin: 20px 10px 0px 10px;
    font-size: medium;
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`

const Msg = styled.h3`
    color:#ff0000;
    padding-top: 10px;
`

function ClientInput(props){
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cep, setCep] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <RecordBox>
                <RecordLabel htmlFor='nameBox'>Nome Completo</RecordLabel>
                <InputBox type='text' id='nameBox' value={name} onChange={(e) => setName(e.target.value)}/>

                <RecordLabel htmlFor='addressBox'>Endereço</RecordLabel>
                <InputBox type='text' id='addressBox' value={address} onChange={(e) => setAddress(e.target.value)}/>

                <RecordLabel htmlFor='numberBox'>Número</RecordLabel>
                <InputBox type='number' id='numberBox' value={number} onChange={(e) => setNumber(e.target.value)}/>

                <RecordLabel htmlFor='distrinctBox'>Bairro</RecordLabel>
                <InputBox type='text' id='distrinctBox' value={district} onChange={(e) => setDistrict(e.target.value)}/>

                <RecordLabel htmlFor='cityBox'>Cidade</RecordLabel>
                <InputBox type='text' id='cityBox' value={city} onChange={(e) => setCity(e.target.value)}/>

                <RecordLabel htmlFor='stateBox'>Estado</RecordLabel>
                <InputBox type='text' id='stateBox' value={state} onChange={(e) => setState(e.target.value)}/>

                <RecordLabel htmlFor='cepBox'>CEP</RecordLabel>
                <InputBox type='text' id='cepBox' value={cep} onChange={(e) => setCep(e.target.value)}/>

                <RecordLabel htmlFor='emailBox'>E-mail</RecordLabel>
                <InputBox type='email' id='emailBox' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <RecordLabel htmlFor='phoneBox'>Telefone</RecordLabel>
                <InputBox type='tel' id='phoneBox' value={phone} onChange={(e) => setPhone(e.target.value)}/>

                <ButtonBox>
                    <ActionButton onClick={() => {
                        if (name !== '') {
                            let client = {
                                'name': name,
                                'address': address,
                                'number': number,
                                'district': district,
                                'city': city,
                                'state': state,
                                'cep': cep,
                                'phone': phone,
                                'email': email,
                            }

                            localStorage.setItem('client', JSON.stringify(client));

                            document.getElementById('msg').innerHTML = 'Cliente gravado com sucesso!';
                        }
                        else {
                            alert('Favor informar o nome do cliente!');
                            document.getElementById('nameBox').focus();
                        }
                    }
                    }>Grava</ActionButton>

                    <ActionButton onClick={() => {
                        const client = JSON.parse(localStorage.getItem('client'));

                        if (client == null){
                            document.getElementById('msg').innerHTML = 'Não existe cliente armazenado';
                        }
                        else {
                            setName(client.name);
                            setAddress(client.address);
                            setNumber(client.number);
                            setDistrict(client.district);
                            setCity(client.city);
                            setState(client.state);
                            setCep(client.cep);
                            setPhone(client.phone);
                            setEmail(client.email);
                        }
                    }}>Recupera</ActionButton>

                    <ActionButton onClick={() => {
                        if (localStorage.getItem('client') != null) {
                            localStorage.removeItem('client');
                            document.getElementById('msg').innerHTML = 'Cliente apagado com sucesso!';
                        }
                        else
                            document.getElementById('msg').innerHTML = 'Não existia cliente armazenado!';
                    }}>Apaga</ActionButton>
                </ButtonBox>
                <Msg id='msg'></Msg>            
            </RecordBox>
        </>
    )
}

export default ClientInput