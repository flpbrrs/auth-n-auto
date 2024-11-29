import { ErroValidacao } from "../../model/ErroValidacao";

export function temTamanhoMaiorQue(valor: any, min: number): string | ErroValidacao | null {
    return valor.length > min
        ? null
        : ({
            codigo: `TAMANHO_MENOR_QUE_O_MINIMO`,
            mensagem: `Deve ter tamanho maior que ${min}, tamanho do valor atual é ${valor.length}`
        });
}