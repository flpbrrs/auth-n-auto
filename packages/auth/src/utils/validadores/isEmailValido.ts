import { ErroValidacao } from "@authnauto/shared";

export function isEmailValido(valor: any): string | ErroValidacao | null {
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    return emailRegex.test(valor)
        ? null
        : { codigo: "EMAIL_INVALIDO", mensagem: "Deve seguir o padrão email@dominio.com" };
}