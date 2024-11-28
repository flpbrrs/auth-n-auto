export interface ErroValidacao {
    codigo: string,
    objeto?: string,
    atributo?: string,
    valor?: any,
    [extras: string]: any
}