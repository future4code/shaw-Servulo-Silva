export type User = {
    name: string,
    CPF: number,
    birthDate: Date,
    balance: number,
    statement: Statement[]
}

export type Statement = {
    value: number,
    date: Date,
    discription: string
}

export const users: User[] = [
    {
        name: "Servulinho",
        CPF: 12345678958,
        birthDate: new Date("2003-05-01"),
        balance: 50000,
        statement: [
            {
                value: 500.00, 
                date: new Date("2000-06-02"), 
                discription: "Compras mercado"
            },
            {
                value: 30.00, 
                date: new Date("2022-05-01"), 
                discription: "Borracharia"
            },
            {
                value: 150.00, 
                date: new Date("2022-08-01"), 
                discription: "Restaurante"
            }
        ]
    },
    {
        name: "Pablo",
        CPF: 85296374132,
        birthDate: new Date("1985-09-15"),
        balance: 4500,
        statement: [
            {
                value: 50.00, 
                date: new Date("2022-05-20"), 
                discription: "Bar"
            },
            {
                value: 300.00, 
                date: new Date("2022-05-21"), 
                discription: "Sorveteria"
            },
            {
                value: 200.00, 
                date: new Date("2022-05-22"), 
                discription: "Compras"
            }
        ]
    },
    {
        name: "Rodrigo",
        CPF: 45678935596,
        birthDate: new Date("1970-08-20"),
        balance: 8000,
        statement: [
            {
                value: 350.00, 
                date: new Date("2022-05-20"), 
                discription: "Restaurante"
            },
            {
                value: 450.00, 
                date: new Date("2022-05-21"), 
                discription: "Teclado mecânico"
            },
            {
                value: 280.00, 
                date: new Date("2022-05-22"), 
                discription: "Jogo do Galo"
            }
        ]
    }
]