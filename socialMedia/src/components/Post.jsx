import { TiDocumentDelete } from "react-icons/ti";
import {useContext} from "react";
import {PostList as PostListData} from "../store/post-list-store";

const Post = ({post}) => {

    const {removePost} = useContext(PostListData);

return (
    <div className="card post-card" style={{width: "30rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={ () => removePost(post.id)}> 
    <TiDocumentDelete />
</span>
    </h5>
    <p className="card-text">{post.description}</p>
    {post.tags.map ((tag)=> (
    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
))}
</div>
</div>
);
}
export default Post;