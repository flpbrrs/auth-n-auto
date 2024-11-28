import { ErroValidacao } from "../ErroValidacao";

export function isRegexValida(valor: string, regex: RegExp, erroMessage: string): string | ErroValidacao | null {
    return regex.test(valor) ? null : erroMessage
}