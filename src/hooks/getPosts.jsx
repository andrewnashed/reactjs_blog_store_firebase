import { firestore } from '../firebase/config';

export default async function getPosts() {
    const postsQuery = firestore.collection('posts')
    const posts= []
    const ref = await (await postsQuery.get()).docs.forEach(doc => posts.push(doc.data()))
    return posts
}