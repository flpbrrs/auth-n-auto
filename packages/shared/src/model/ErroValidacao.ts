export interface ErroValidacao {
    codigo: string,
    objeto?: string,
    atributo?: string,
    [extras: string]: any
}