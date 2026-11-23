export interface Lote {


  codigoLote:string
    id:number,
    quantidade:number;

    dataEntrada:string;

    dataValidade:string;

    enviadoParaPromocaoEm:string|null;

    produtoNome:string;

    marcaDoProduto:string|null;

    rua:number;

    gondola:number;

    andar:number;

    lado:number;

    posicao:number;

    idProduto:number;

    nomeSetor:string;

    fotoUrl:string;

}
