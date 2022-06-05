import Button from 'react-bootstrap/Button';

import React from "react";
import axios from "axios";

function Title() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/posts")
            .then((response) => setPosts(response.data));
    }, []);

    return (
        <>
            <h3>Example heading <span class="label label-default">New</span></h3>
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

export default Title;