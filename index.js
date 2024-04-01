const users = [
    {
      id: 1,
      city: "São Paulo",
      name: "josé da silva",
      age: 21,
      weight: 70,
      sex: "m",
      height: 1.7,
      salary: 1000,
      married: false,
      active: true,
    },
    {
      id: 2,
      city: "Rio de Janeiro",
      name: "maria clementina correia",
      age: 17,
      weight: 70,
      sex: "f",
      height: 1.6,
      salary: 2000,
      married: false,
      active: true,
    },
    {
      id: 3,
      city: "Rio de Janeiro",
      name: "antonieta francesa rainha",
      age: 28,
      weight: 70,
      sex: "f",
      height: 1.65,
      salary: 3000,
      married: true,
      active: true,
    },
    {
      id: 4,
      city: "Rio de Janeiro",
      name: "silva melo de aguiar",
      age: 38,
      weight: 70,
      sex: "m",
      height: 1.85,
      salary: 5000,
      married: true,
      active: true,
    },
    {
      id: 5,
      city: "São Paulo",
      name: "joão carvalho da conceição",
      age: 48,
      weight: 70,
      sex: "m",
      height: 1.9,
      salary: 9000,
      married: false,
      active: true,
    },
    {
      id: 6,
      city: "São Paulo",
      name: "zé rico programador",
      age: 62,
      weight: 90,
      sex: "m",
      height: 1.82,
      salary: 30000, // 30 mil
      married: false,
      active: true,
    },
  ];
  
  const userProducts = [
    {
      id: 1,
      userId: 1,
      name: "Maçã",
      category: "Comida",
      price: 10,
    },
    {
      id: 2,
      userId: 1,
      name: "Blusa",
      category: "Roupa",
      price: 50,
    },
    {
      id: 3,
      userId: 2,
      name: "Calça Jeans",
      category: "Roupa",
      price: 300,
    },
    {
      id: 4,
      userId: 2,
      name: "Sapatos",
      category: "Roupa",
      price: 100,
    },
    {
      id: 5,
      userId: 2,
      name: "Sapatos",
      category: "Roupa",
      price: 120,
    },
    {
      id: 6,
      userId: 2,
      name: "Toalha",
      category: "Cama e Mesa",
      price: 35,
    },
    {
      id: 7,
      userId: 3,
      name: "Uber",
      category: "Transporte",
      price: 20,
    },
    {
      id: 8,
      userId: 3,
      name: "Uber",
      category: "Transporte",
      price: 20,
    },
    {
      id: 9,
      userId: 3,
      name: "Taxi",
      category: "Transporte",
      price: 30,
    },
    {
      id: 10,
      userId: 6,
      name: "Computador",
      category: "Tecnologia",
      price: 5000,
    },
  ];
  


// 1. Encontrar um usuário pelo nome;


const findUserByName = (users, name) => {
    const result = users.filter((user) => user.name === name)[0]

    return result
}

// console.log(findUserByName(users, "maria clementina correia"))

  
// 2. Encontrar um usuário pelo valor de uma propriedade qualquer;
// Dica: a assinatura do método é findUserByPropValue(users, prop, value)

const findUserByPropValue = (users, prop, value) => {
    const result = users.filter((user) => user[prop] === value)[0]

    return result
} 

// console.log(findUserByPropValue(users, 'sex', 'f'))

  
// 3. Encontrar a usuária do sexo feminino com o salário maior.

const findFemaleUserByHighestSalary = (users) => {
    let result = ''

    if (result == '') users.forEach((e) => {
        if (e.sex ==='f') result = e
    })

    users.forEach((e) => {
        if (e.sex === 'f' && e.salary > result.salary) result = e
    })

    return result
}

// console.log(findFemaleUserByHighestSalary(users))

  
// 4. Encontre os usuários de um dado estado e com peso maior
// que um dado peso;

const findUsersByWeight = (users, weight) => {

    const result = users.filter((e) => e.weight > weight)

    return result
}

// console.log(findUsersByWeight(users, 70))

  
// 5. Encontre os usuários de um dado estado ou que são casados;

const findUserFromCityAndIfIsMarried = (users, city) => {
    const result= users.filter((e) => e.city === city || e.married == true)

    return result
}

console.log(findUserFromCityAndIfIsMarried(users, 'São Paulo'))
  
// 6. Cria uma função que recebe a lista de usuários e retorna
// uma lista com o IMC dos respectivos usuários;
// OBS: imc = peso/(altura x altura)

const getUsersIMC = (users) => {
    const result = users.reduce((acc, e) => {
        let calculated = []

        calculated = [...acc, {
            name: e.name,
            imc: (e.weight / (e.height * e.height)).toFixed(3)
        }]

        return calculated
    },[])

    return result
}

// console.log(getUsersIMC(users))
  
// 7. Cria uma função que recebe a lista de usuários e retorna
// a lista dos nomes completos capitalizados;
// OBS: o nome 'joao da silva' capitalizado, seria: Joao Da Silva
// Dica1: Criar uma função auxiliar somente para capitalizar
// uma única palavra.
// Dica2: Criar outra função auxiliar para capitalizar
// um nome completo, com mais de uma palavra.
// Usar: split e join e a função da dica1

const capitalizeWord = (word) => {
    let wordSplited = word.split('')

    wordSplited[0] = word[0].toUpperCase()

    let wordCapitalized = wordSplited.join('')

    return wordCapitalized
}

const capitalizePhrase = (phrase) => {
    let wordsCapitalized = []
    let wordsOrganized = ''

    let phraseSplited = phrase.split(' ')

    phraseSplited.forEach((e) => wordsCapitalized.push(capitalizeWord(e)))

    wordsCapitalized.forEach((e, index) => {
        if (wordsCapitalized.length === index + 1)  return wordsOrganized += e

        return wordsOrganized += e + ' '
    })

    return wordsOrganized
}

const capitalizeNames = (users) => {
    const result = users.reduce((acc, e) => {
        let capitalizedNames = [...acc, capitalizePhrase(e.name)]

        return capitalizedNames
    },[])

    return result
}

// console.log(capitalizeNames(users))

  
// 8. Calcular a média de altura de todos os usuários;

const getUsersAverageHeight = (users) => {
    let result = users.reduce((acc, e) => {

        let accumulated = acc + e.height
        return accumulated
    },0)

    return  result / users.length
}

// console.log(getUsersAverageHeight(users))

  
// 9. Retornar os usuários com altura abaixo da média;

const getUsersWithLessThanAverageHeight = (users) => {

    let average = getUsersAverageHeight(users)

    let result = users.filter((e) => e.height < average)

    return {"average_height": average, "users": result}
}

// console.log(getUsersWithLessThanAverageHeight (users))

  // 10. Verificar se um dado produto foi consumido
  // mais de uma vez.

const checkIfConsumedTwice = (userProducts, product) => {
    let count = 0

    for (let i = 0; i < userProducts.length - 1; i += 1) {
        if (userProducts[i].name == product) count += 1
        if(count == 2) return true
    }

    return false
}

// console.log(checkIfConsumedTwice(userProducts, "Sapatos"))
  
// 11. Verificar se um dado produto foi consumido
// mais de um usuário.

const checkIfConsumedByTwoUsers = (userProducts, product) => {
    let listCount = {}

    for (let i = 0; i < userProducts.length; i += 1) {
        if (userProducts[i].name === product) {
            listCount[userProducts[i].userId] = true
        } 
    }

    let result = Object.keys(listCount)

    if (result.length >= 2) return true
    
    return false
}

// console.log(checkIfConsumedByTwoUsers(userProducts, 'Computador'))
  
  // 12. Verificar se existe algum produto
  // que foi comprado por mais de um usuário

  // 13. Retornar a lista de usuários sem o usuário mais novo da lista.

const listWithoutTheYoungestUser = (users) => {
    let usersOrdered = users.sort((a, b) => a.age - b.age)

    usersOrdered.shift()

    return usersOrdered
}

// console.log(listWithoutTheYoungestUser(users))


  // 14. Retornar um objeto que mapeia usuários pelo próprio
  // id do usuário.
  // ex: {
  //   1: {
  //     id: 1,
  //     city: "São Paulo",
  //     name: "josé da silva",
  //     age: 21,
  //     weight: 70,
  //     sex: "m",
  //     height: 1.7,
  //     salary: 1000,
  //     married: false,
  //     active: true,
  //   },
  //   .
  //   .
  //   .
  // }

const mapUsersByUserId = (users) => {
    let result = {}

    users.forEach((e) => result[e.id] = e)

    return result
}

// console.log(mapUsersByUserId(users))
  
  // 15. Contar a quantidade de usuários de uma dada cidade;

const countUsersByCity = (users, city) => {
    let result = users.filter((e) => e.city == city)

    return result.length
}

// console.log(countUsersByCity(users, "São Paulo"))
  
  // 16. Agrupar usuários pela cidade;

const groupUsersByCity = (users) => {
    let result = {}

    users.forEach((e) => {
        if (result[e.city]) return result[e.city] = [...result[e.city], e.name]
        return result[e.city] = [e.name]
    })

    return result
}

// console.log(groupUsersByCity(users))
  
  // 17. Contar a quantidade de usuários por cidade;

const countUsersFromEachCity = (users) => {
    let result = {}

    let groupUsersByCityVar = groupUsersByCity(users)

    let keys = Object.keys(groupUsersByCityVar)

    keys.forEach((e) => result[e] = groupUsersByCityVar[e].length)

    return result
}

// console.log(countUsersFromEachCity(users))
  
  // 18. Obter a média salarial dos usuários por cidade;

const getAverageSalaryByCity = (users, city) => {
    const usersByCity = users.filter((e) => e.city == city)

    const totalSalary = usersByCity.reduce((acc, e) => {
            let val = acc + e.salary

            return val
    }, 0)

    return (totalSalary / usersByCity.length).toFixed(2)
}

// console.log(getAverageSalaryByCity(users, 'São Paulo'))

  // 19. Obter os nomes distintos de produtos;

const distinctProductNames = (userProducts) => {
    let hash = {}

    userProducts.forEach((e) => hash[e.name] = true)

    let result = Object.keys(hash)

    return result
}

// console.log(distinctProductNames(userProducts))
  
  // 20. Retornar os usuários que gastaram mais que preço
  // médio dos produtos vendidos;

const usersSpendMoreThanProductsPriceAverage = (users, userProducts) => {
    let totalPriceProducts = userProducts.reduce((acc, e) => {
        let result = acc + e.price

        return result
    }, 0)

    let productsAveragePrice = (totalPriceProducts / userProducts.length).toFixed(2)

    let usersPurchases = {}

    userProducts.forEach((e) => {
        if (!usersPurchases[e.userId]) {
            usersPurchases[e.userId] = e.price
            return
        }

        usersPurchases[e.userId] += e.price
        return
    })

    let result = users.filter((e) => usersPurchases[e.id] && usersPurchases[e.id] > productsAveragePrice)

    return result
}

// console.log(usersSpendMoreThanProductsPriceAverage(users, userProducts))

  // 21. Encontre o userId que menos gastou;

const userWhoSpendLess = (users, userProducts) => {

    let usersSpent = {}

    userProducts.forEach((e) => {
        let [user] = users.filter((user) => user.id == e.userId)

        if (!usersSpent[user.name]) {
            usersSpent[user.name] = e.price
            return
        } 

        usersSpent[user.name] += e.price
    })

    key = Object.keys(usersSpent)

    let result = ''

    key.forEach((e) => {
        if (!result) {
            result = {user: e, value: usersSpent[e]}
            return
        } 

        if (usersSpent[e] < result.value) result = {user: e, value: usersSpent[e]}
    })

    return result
}

// console.log(userWhoSpendLess(users, userProducts))
  
  // 22. Encontre o userId que comprou menos produtos, mas
  // que comprou sim algum produto;


const userWhoBoughtLessProducts = (users, userProducts) => {
    let userProductsquantity = {}

    userProducts.forEach((e) => {
        let [user] = users.filter((user) => user.id == e.userId)

        if (!userProductsquantity[e.userId]) {
            userProductsquantity[e.userId] = {user: user.name, total: 1}
        }

        userProductsquantity[e.userId].total += 1
    })

    keys = Object.keys(userProductsquantity)

    let result = ''

    keys.forEach((e) => {
        if (!result) {
            result = userProductsquantity[e]
            return
        }

        if (userProductsquantity[e].total < result.total) result = userProductsquantity[e]
    })

    return result
}

// console.log(userWhoBoughtLessProducts(users, userProducts))
  
  // 23. Encontre os usuários (objetos completos)
  // que compraram algum produto;

const usersWhoBoughtSomeProduct = (users, userProducts) => {
    let usersId = {}

    userProducts.forEach((e) => usersId[e.userId] = true)

    let keys = Object.keys(usersId)

    let result = users.filter((e) => keys.includes((e.id).toString()))

    return result
}

// console.log(usersWhoBoughtSomeProduct(users, userProducts))
  
  // 24. Encontre os usuários comuns a duas listas de usuários.
  // Dois usuários são idênticos, se tiverem o mesmo id;
  // ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
  // usuariosComuns => [{id:3}]

const comuns = (list1, list2) => {
    let comuns = {}

    list1.forEach((e) => comuns[e.id] = 'incomum')

    list2.forEach((e) => {
        let id = e.id
        if(comuns[id]) comuns[id] = 'comum'
    })

    keys = Object.keys(comuns)

    let result = []

    keys.forEach((e) => {
        if (comuns[e] == 'comum') result.push({id: e})
    })

    return result
}

// console.log(comuns(users, userProducts))
  
  // 25. Encontre os usuários não-comuns a duas listas de usuários.
  // ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
  // usuariosNaoComuns => [{id:2}, {id:4}]

const incomuns = (list1, list2) => {
    let incomuns = {}

    list1.forEach((e) => incomuns[e.id] = 'comum')

    list2.forEach((e) => {
        let id = e.id
        if(!incomuns[id]) incomuns[id] = 'incomum'
    })

    keys = Object.keys(incomuns)

    let result = []

    keys.forEach((e) => {
        if (incomuns[e] == 'incomum') result.push({id: e})
    })

    return result


}

// console.log(incomuns(users, userProducts))


// const incomuns = (list, list2)