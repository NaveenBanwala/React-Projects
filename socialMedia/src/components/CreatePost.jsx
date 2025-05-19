import {useRef,useContext} from "react";
import {PostList} from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const {addPost} = useContext(PostList);
    const navigate = useNavigate();
    
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postDescriptionElement = useRef();
    const reactionsElement = useRef();
    const postTagsElement = useRef();

    const handleOnSubmit =(event) =>{
        event.preventDefault();
        const userId= userIdElement.current.value;
        const title=postTitleElement.current.value;
        const description= postDescriptionElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = postTagsElement.current.value.split(" ");

        userIdElement.current.value="";
        postTitleElement.current.value="";
        postDescriptionElement.current.value="";
        reactionsElement.current.value="";
        postTagsElement.current.value="";

        addPost(userId,title,description,reactions,tags);
        navigate("/");
    }
    
return (

<form className="form-create-post" onSubmit={handleOnSubmit} >

    <div className="mb-3" >
    <label htmlFor="UserId" className="form-label">Enter your User Id</label>
    <input ref={userIdElement} type="text" className="form-control" id="title" placeholder="Enter you User Id here..."/>
    </div>

    <div className="mb-3" >
    <label htmlFor="title" className="form-label">Post title</label>
    <input ref={postTitleElement} type="text" className="form-control" id="title"/>
    </div>

    <div className="mb-3" >
    <label htmlFor="body" className="form-label">Description</label>
    <textarea  ref={postDescriptionElement} type="text" rows= "4" className="form-control" id="title" placeholder="Tell about Post  "/>
    </div>

    <div className="mb-3" >
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input  ref={reactionsElement} type="text" className="form-control" id="title" placeholder="Number of people reacted.."/>
    </div>

    <div className="mb-3" >
    <label htmlFor="tag" className="form-label">Enter tags</label>
    <input  ref={postTagsElement} type="text" className="form-control" id="title" placeholder="please enter tags with space"/>
    </div> 

<button type="submit" className="btn btn-primary">Post</button>

</form>

    );
}
export default CreatePost;