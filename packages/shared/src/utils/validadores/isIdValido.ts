import { validate } from "uuid";
import { ErroValidacao } from "../../model/ErroValidacao";

export function isIdValido(valor: string, mensagem?: string): string | ErroValidacao | null {
    return validate(valor)
        ? null
        : { codigo: "ID_INVALIDO", mensagem };
}