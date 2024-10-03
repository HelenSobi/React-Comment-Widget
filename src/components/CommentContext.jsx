import { createContext, useState } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem("comments")) || []);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddComment = (commentText) => {
        const newComment = { text: commentText, replies: [] };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
    };

    const handleEditComment = (commentText, index) => {
        
        const updatedComments = comments.map((comment, i) => 
            i === index ? { ...comment, text: commentText } : comment
        );
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
    };

    const handleDeleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
    };

    const handleReply = (replyText, commentIndex) => {
        const updatedComments = comments.map((comment, i) => {
            if (i === commentIndex) {
                return { ...comment, replies: [...comment.replies, replyText] };
            }
            return comment;
        });
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
    };

    return (
        <CommentContext.Provider value={{ comments, handleAddComment, handleEditComment, handleDeleteComment, handleReply }}>
            {children}
        </CommentContext.Provider>
    );
};
