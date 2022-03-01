import { firestore } from '../firebase/config';

export default async function getProducts() {
    const productQuery = firestore.collection('products')
    const products= []
    const ref = await (await productQuery.get()).docs.forEach(doc => products.push(doc.data()))
    return products
}