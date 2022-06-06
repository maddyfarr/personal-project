
import React from "react";
import Button from 'react-bootstrap/Button';
import SunImage from '../sun.JPG';

import axios from "axios";

function Posts() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/posts")
            .then((response) => setPosts(response.data));
    }, []);

    return (
        <>
            <img src={SunImage} alt="blog" />
            <Button variant="primary">Button #1</Button>
            <ul className="posts">
                {posts.map((post) => (
                    <li className="post" key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Posts;