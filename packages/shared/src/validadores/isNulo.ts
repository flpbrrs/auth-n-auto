import { ErroValidacao } from "../ErroValidacao";

export function isNulo(valor: any): string | ErroValidacao | null {
    return valor === null || valor === undefined
        ? null
        : { codigo: "VALOR_NAO_NULO" }
}