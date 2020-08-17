import faker from 'faker'

export const users = [
    {
        name: 'Lowell',
        secname: 'Cassin' ,
        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/felipeapiress/128.jpg' ,
        id: `${faker.random.uuid()}`,
        login:'User_1',
        password:'123'
    },
    {
        name: 'Jeff',
        secname: 'Lebsack' ,
        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/missaaamy/128.jpg' ,
        id: `${faker.random.uuid()}`,
        login:'User_2',
        password:'456'
    },
    {
        name: 'Edythe',
        secname: 'Dickinson' ,
        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ryanjohnson_me/128.jpg' ,
        id: `${faker.random.uuid()}`,
        login:'User_3',
        password:'789'
    },
    {
        name: 'Mireille',
        secname: 'Wintheiser' ,
        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/brandonflatsoda/128.jpg' ,
        id: `${faker.random.uuid()}`,
        login:'User_4',
        password:'159'
    }
]