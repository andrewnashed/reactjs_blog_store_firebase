import React, {useState, useEffect} from 'react';
import Post from '../components/Post';
import getPosts from '../hooks/getPosts';
import Grid from '../components/Reusable/Grid';
import getProducts from '../hooks/getProducts';
import Product from '../components/Product';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [products, setProducts] = useState([])


    useEffect(()=>{
        const fetchPosts = async () =>
        {
            const posts = await getPosts();
            const products = await getProducts();
            
        setPosts(posts)
        setProducts(products)
    }
        fetchPosts();
    },[])

    console.log(posts);

    return ( <>
        <Grid cols={1}>
            {posts && posts.length > 0? posts.map(post => <Post key={posts.indexOf(post)} post={post}/>):<p>No Posts to show</p>}
        </Grid>
        <Grid cols={2}> 
            {products && products.length > 0? products.map(product => <Product key={products.indexOf(product)} product={product}/>):<p>No Posts to show</p>}
        </Grid>
    </> );
}
 
export default Home;