import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from 'react-router-dom';

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams();
    useEffect(()=>{
        postService.getAll().then(value => {
            const title = query.get('title');
            console.log(title);
            let filter = [...value]
            if (title){
                filter =  value.filter(post =>post.title.includes(title))
            }
            setPosts(filter)
        })
    },[query])
    const submit = (e) => {
        e.preventDefault()
        setQuery({title:e.target.search.value})
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="search" name={'search'}/>
                <button>Search</button>
            </form>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/> )}
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};
