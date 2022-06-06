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

    var myDate = new Date();

    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    return (
        <>
            <Button variant="primary">Button #1</Button>
            <h4>{greet}</h4>
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