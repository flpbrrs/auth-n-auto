import { ErroValidacao } from "../../model/ErroValidacao";

export function isNaoNulo(valor: any, mensagem?: string): string | ErroValidacao | null {
    return valor !== null && valor !== undefined
        ? null
        : { codigo: "VALOR_NULO", mensagem };
}