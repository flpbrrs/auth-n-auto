import { ErroValidacao } from "../ErroValidacao";
import { isNaoNulo } from './isNaoNulo'

export function isNaoVazio(valor: any): string | ErroValidacao | null {
    if (
        valor === null ||
        valor === undefined ||
        (typeof valor === 'string' && valor.trim() === '') ||
        (Array.isArray(valor) && valor.length === 0)
    ) {
        return "VALOR_VAZIO";
    }
    return null;
}