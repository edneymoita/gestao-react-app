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

function ProductInput(props){
    const [label, setLabel] = useState('');
    const [brand, setBrand] = useState('');
    const [presentation, setPresentation] = useState('');
    const [volume, setVolume] = useState('');
    const [amount, setAmount] = useState('');
    const [netPrice, setNetPrice] = useState('');
    const [retailPrice, setRetailPrice] = useState('');

    return (
        <>
            <RecordBox>
                <RecordLabel htmlFor='labelBox'>Rótulo</RecordLabel>
                <InputBox type='text' id='labelBox' value={label} onChange={(e) => setLabel(e.target.value)}/>

                <RecordLabel htmlFor='brandBox'>Marca</RecordLabel>
                <InputBox type='text' id='brandBox' value={brand} onChange={(e) => setBrand(e.target.value)}/>

                <RecordLabel htmlFor='presentationBox'>Apresentação</RecordLabel>
                <InputBox type='text' id='presentationBox' value={presentation} onChange={(e) => setPresentation(e.target.value)}/>

                <RecordLabel htmlFor='volumeBox'>Volume</RecordLabel>
                <InputBox type='tel' id='volumeBox' value={volume} onChange={(e) => setVolume(e.target.value)}/>

                <RecordLabel htmlFor='amountBox'>Quantidade</RecordLabel>
                <InputBox type='text' id='amountBox' value={amount} onChange={(e) => setAmount(e.target.value)}/>

                <RecordLabel htmlFor='netPriceBox'>Preço de Compra</RecordLabel>
                <InputBox type='text' id='netPriceBox' value={netPrice} onChange={(e) => setNetPrice(e.target.value)}/>

                <RecordLabel htmlFor='retailPriceBox'>Preço Revenda</RecordLabel>
                <InputBox type='text' id='retailPriceBox' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)}/>

                <ButtonBox>
                    <ActionButton onClick={() => {
                        if (label !== '') {
                            let product = {
                                'label': label,
                                'brand': brand,
                                'presentation': presentation,
                                'volume': volume,
                                'amount': amount,
                                'netPrice': netPrice,
                                'retailPrice': retailPrice,
                            }

                            localStorage.setItem('product', JSON.stringify(product));

                            document.getElementById('msg').innerHTML = 'Produto gravado com sucesso!';
                        }
                        else {
                            alert('Favor informar o nome do produto!');
                            document.getElementById('labelBox').focus();
                        }
                    }
                    }>Grava</ActionButton>
                    <ActionButton onClick={() => {
                        const product = JSON.parse(localStorage.getItem('product'));

                        if (product == null){
                            document.getElementById('msg').innerHTML = 'Não existe produto armazenado';
                        }
                        else {
                            setLabel(product.label);
                            setBrand(product.brand);
                            setPresentation(product.presentation);
                            setVolume(product.volume);
                            setAmount(product.amount);
                            setNetPrice(product.netPrice);
                            setRetailPrice(product.retailPrice);
                        }
                    }}>Recupera</ActionButton>
                    <ActionButton onClick={() => {
                        if (localStorage.getItem('product') != null) {
                            localStorage.removeItem('product');
                            document.getElementById('msg').innerHTML = 'Produto apagado com sucesso!';
                        }
                        else
                            document.getElementById('msg').innerHTML = 'Não existia produto armazenado!';
                    }}>Apaga</ActionButton>
                </ButtonBox>
                <Msg id='msg'></Msg>            
            </RecordBox>
        </>
    )
}

export default ProductInput