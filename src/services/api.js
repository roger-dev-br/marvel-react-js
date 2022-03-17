import axios from 'axios';

/*
Crio a instancia do axios e já deixo setada 
a url base da marvel
*/
const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
});

/* 
constante com a minha chave da Marvel
!!! TROQUE PELA SUA CHAVE, PFV !!!
*/
const marvelKey = `ts=1631572374297&apikey=6b4f4a0506338bc9c00889db929533d7&hash=ce9ca3b84c5d534a03c5c7c6fbc7eff0`;

export {
    api,
    marvelKey,
};
