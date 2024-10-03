import React, { useContext, useState } from 'react';
import { CommentContext } from './CommentContext';
import PostedComments from './PostedComments';

const CommentBox = () => {
    const { comments, handleAddComment, handleEditComment, handleDeleteComment } = useContext(CommentContext);
    const [inputComment, setInputComment] = useState('');
    const [commentBtnText, setCommentBtnText] = useState("Post Comment");
    const [editIndex, setEditIndex] = useState(null);

    const handleButton = () => {
        if (inputComment.trim()) {
            if (editIndex !== null) {
                handleEditComment(inputComment, editIndex);
                setCommentBtnText("Post Comment");
                setEditIndex(null);
            } else {
                handleAddComment(inputComment);
            }
            setInputComment('');
        }
    };
 // Function to set the edit state when edit is clicked
 const handleEditClick = (commentText, index) => {
    setInputComment(commentText);  // Populate the input with the current comment's text
    setEditIndex(index);           // Set the index of the comment being edited
    setCommentBtnText("Edit Comment");  // Change button text to indicate edit mode
};
    return (
        <section className="p-4 w-full bg-gray-100">
            <p>{comments.length} Comments</p>
            <div className="flex flex-col items-end gap-6 mt-4 w-full md:w-9/12">
                <textarea
                    rows={3}
                    cols={5}
                    value={inputComment}
                    onChange={(e) => setInputComment(e.target.value)}
                    className="rounded resize-none w-full px-4 bg-gray-200 border border-gray-400 placeholder-gray-400 focus:outline-none focus:bg-white"
                    placeholder="post a comment..."
                />
                <button onClick={handleButton} className="bg-cyan-600 hover:bg-cyan-900 text-white font-semibold px-2 py-2 rounded-md transition-all">
                    {commentBtnText}
                </button>
            </div>
            {comments.map((comment, index) => (
                <div key={index} className="mb-4 p-2 border rounded mt-4 w-full md:w-9/12 bg-gray-50">
                    <PostedComments 
                        id={index} 
                        comments={comment.text}
                        replies={comment.replies} // Pass the replies to the PostedComments
                        onEdit={handleEditClick}
                    />
                </div>
            ))}
        </section>
    );
};

export default CommentBox;
