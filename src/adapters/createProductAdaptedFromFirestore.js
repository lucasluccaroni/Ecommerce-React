
export const createProductAdaptedFromFirestore = (doc) =>{
    const fields = doc.data()

    return{
        id: doc.id,
        name: fields.name,
        category: fields.category,
        price: fields.price,
        stock: fields.stock,
        img: fields.img,
        description: fields.description
    }
}