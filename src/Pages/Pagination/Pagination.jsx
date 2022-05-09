import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import "./Pagination.scss"

const Pagination = () => {
    const [comments, setComments] = useState([{}]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((json) => setComments(json.slice(0, 50)));
    }, []);

    console.log(comments);

    const commentsPerPage = 10;
    const pagesVisited = pageNumber * commentsPerPage;

    const displayComments = comments
        .slice(pagesVisited, pagesVisited + commentsPerPage)
        .map((comment) => {
            return (
                <div className="comment">
                    <h3>{comment.name}</h3>
                    <h3>{comment.email}</h3>
                    <h3>{comment.body}</h3>
                </div>
            );
        });

    return <Home>
        <div className="comments-container">
        {displayComments}
        </div>
        </Home>;
};

export default Pagination;
