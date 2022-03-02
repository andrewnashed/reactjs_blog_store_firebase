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
    <div className='w-full h-72 flex flex-col justify-center items-center text-3xl space-y-2 text-gray-100 p-4' style={{backgroundSize:'cover', background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url('https://images.unsplash.com/photo-1522108098940-de49801b5b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2tpbmNhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')"}}>
        <p>Read The latest articles</p>    
    </div>
        {/*  */}
        <Grid cols={1}>
            {posts && posts.length > 0? posts.map(post => <Post key={posts.indexOf(post)} post={post}/>):<p>No Posts to show</p>}
        </Grid>
        <Grid cols={2}> 
            {products && products.length > 0? products.map(product => <Product key={products.indexOf(product)} product={product}/>):<p>No Posts to show</p>}
        </Grid>
    </> );
}
 
export default Home;