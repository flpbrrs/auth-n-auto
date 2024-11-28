import { validate } from "uuid";
import { ErroValidacao } from "../ErroValidacao";

export function temTamanhoMaiorOuIgualA(valor: any, min: number): string | ErroValidacao | null {
    return valor.length >= min
        ? null
        : ({ codigo: `TAMANHO_MENOR_OU_IGUAL_AO_MINIMO`, min, tamanho: valor.length });
}