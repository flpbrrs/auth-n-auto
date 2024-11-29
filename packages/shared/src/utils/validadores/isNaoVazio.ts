import { ErroValidacao } from "../../model/ErroValidacao";

export function isNaoVazio(valor: any, messagem?: string): string | ErroValidacao | null {
    if (
        valor === null ||
        valor === undefined ||
        (typeof valor === 'string' && valor.trim() === '') ||
        (Array.isArray(valor) && valor.length === 0)
    ) {
        return { codigo: "VALOR_VAZIO", messagem };
    }
    return null;
}