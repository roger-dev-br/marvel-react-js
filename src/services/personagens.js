import { api, marvelKey } from './api';

class Personagens {
    async obtemPersonagens(offset) {
        if (!offset) {
            offset = 0;
        }
        const resposta = await api.get(`/characters?${marvelKey}&limit=20&offset=${offset}`);
        return resposta.data.data;
    }

    async obtemPersonagensPorPesquisa(valor) {
        const resposta = await api.get(`/characters?${marvelKey}&nameStartsWith=${valor}`);
        return resposta.data.data;
    }
}

export default new Personagens();