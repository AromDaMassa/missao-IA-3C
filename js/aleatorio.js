const nomes = ["Cage", "Nicolas", "Thomas", "Turbando", "Clash", "Royale"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

export const nome = aleatorio(nomes)