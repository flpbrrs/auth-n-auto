import { validate } from "uuid";
import { ErroValidacao } from "../ErroValidacao";

export function temTamanhoMaiorQue(valor: any, min: number): string | ErroValidacao | null {
    return valor.length > min
        ? null
        : ({ codigo: `TAMANHO_MENOR_QUE_O_MINIMO`, min, tamanho: valor.length });
}