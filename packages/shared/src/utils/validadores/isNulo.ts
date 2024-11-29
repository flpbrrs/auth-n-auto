import { ErroValidacao } from "../../model/ErroValidacao";

export function isNulo(valor: any, mensagem?: string): string | ErroValidacao | null {
    return valor === null || valor === undefined
        ? null
        : { codigo: "VALOR_NAO_NULO", mensagem }
}