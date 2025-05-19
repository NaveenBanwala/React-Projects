import { createContext, useReducer} from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    removePost: () => {},
});

const postListReducer = ( currPostList,action) => {

    let newPostList = currPostList;

    if(action.type === "DELETE_POST" ){
        newPostList = currPostList.filter(post => {
        return action.payload.id !== post.id;
        })

    }else if(action.type === "ADD_POST"){
        newPostList = [action.payload , ...currPostList];
    return newPostList;
    }
    return newPostList;
}

function PostListProvider({children}){
    const [postList , dispatchPostList]= useReducer(postListReducer, DefaultPostList);

    const addPost =(userId,title,description,reactions,tags) => {
        // console.log(`${id} ${title} ${tags}` );
        dispatchPostList({
            type:"ADD_POST",
            payload :{
                id : Date.now(),
                description : description,
                title: title,
                reactions : reactions,
                userId : userId,
                tags : tags,
            }

        
        });


    }
    const removePost =(id) => {
        dispatchPostList({
            type : "DELETE_POST",
            payload :{
                id,
            }
        });

        // console.log(`remove post for id : ${id}`);


        // useEffect(() =>{

        // })

    }
    return (
        <PostList.Provider value= {{
            postList,
            addPost,
            removePost,
        }} >
            {children}
        </PostList.Provider>
    );
}

const DefaultPostList = [
    {
    id : 1,
    description : "Default Post1",
    title: "This is a default post 1",
    reactions : 1,
    userId : 4,
    tags : ["tag1", "tag2"],
},{
    id : 2,
    description : "Default Post2",
    title: "This is a default post2",
    reactions : 1,
    userId : 2,
    tags : ["tag1", "tag2"],

}
]
export default PostListProvider;