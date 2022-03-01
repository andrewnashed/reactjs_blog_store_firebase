import Card from "./Reusable/Card";


const Post = ({post}) => {
    return ( 
        <Card>
            <figure>
                <img src={post['img_url']} alt="header" />
            </figure>
            <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-700">{post.title}</h3>
                <p className="text-gray-500">{post.date.toDate().toDateString()}</p>
                <p>{post.summary}</p>
            </div>
        </Card>
     );
}
 
export default Post;