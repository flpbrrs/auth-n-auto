import { ErroValidacao } from "../../model/ErroValidacao";

export function temTamanhoMaiorOuIgualA(valor: any, min: number): string | ErroValidacao | null {
    return valor.length >= min
        ? null
        : ({
            codigo: `TAMANHO_MENOR_OU_IGUAL_AO_MINIMO`,
            mensagem: `Deve ter tamanho maior ou igual a ${min}, tamanho do valor atual é ${valor.length}`
        });
}