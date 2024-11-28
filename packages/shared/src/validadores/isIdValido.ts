import { validate } from "uuid";
import { ErroValidacao } from "../ErroValidacao";

export function isIdValido(valor: string): string | ErroValidacao | null {
    return validate(valor)
        ? null
        : { codigo: "ID_INVALIDO" };
}