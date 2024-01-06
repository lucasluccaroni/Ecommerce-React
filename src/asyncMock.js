const products = [
    { 
        id: '1', 
        name: 'Windows 1998', 
        price: 1200, 
        category: 'sistemas-operativos', 
        img:"../public/images/windows-98.jpg",
        stock: 25, 
        description:'Sistema operativo Windows 1998'
    },
    { 
        id: '2', 
        name: 'Encarta 1998',
        price: 1000,
        category: 'programs',
        img: "../public/images/encarta-98.jpg",
        stock: 16,
        description:'Encarta Encyclopedia Edición 1998'
    },
    { 
        id: '3',
        name: 'Microsoft Oceans 1995',
        price: 900,
        category: 'programs',
        img:"../public/images/microsoft-oceans.jpg",
        stock: 0,
        description:'Microsoft Oceans Edición 1995'
    }
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}