import { ErroValidacao } from "../ErroValidacao";

export function isNaoNulo(valor: any): string | ErroValidacao | null {
    return valor !== null && valor !== undefined
        ? null
        : "VALOR_NULO";
}