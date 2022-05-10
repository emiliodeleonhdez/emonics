import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Home from "../Home/Home";
import "./Pagination.scss"

const Pagination = () => {
    const [comments, setComments] = useState([{}]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((json) => setComments(json.slice(0, 500)));
    }, []);

    const commentsPerPage = 10;
    const pagesVisited = pageNumber * commentsPerPage;

    const pageCount = Math.ceil(comments.length / commentsPerPage)

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

        const changePage = ({ selected }) =>{
            setPageNumber(selected)
        }

    return <Home>
        <div className="comments-container">
        {displayComments}
        </div>
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}

        />  
        </Home>;
};

export default Pagination;
