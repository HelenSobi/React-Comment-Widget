import { useContext, useState } from 'react';
import { CommentContext } from './CommentContext';
import ReplyComments from './ReplyComments';

const PostedComments = ({ id, comments, replies , onEdit }) => {
    const { handleEditComment, handleDeleteComment } = useContext(CommentContext);
    const [replyMode, setReplyMode] = useState(false);
    
    return (
        <>
            <div className="">
                <p className="text-sm">{comments}</p>
                <div className="flex justify-start mt-2">
                    <button className="mr-8" onClick={() => setReplyMode(!replyMode)}>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="#0891B2" viewBox="0 0 16 16">
                        <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                        </svg>
                    </button>
                    <button className="mr-8" onClick={() => onEdit(comments, id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="16" height="16" fill="#0891B2" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                    </button>
                    <button className="mr-8" onClick={() => handleDeleteComment(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0891B2"  viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    </button>
                </div>
                {replyMode && <ReplyComments id={id} />}
                {/* Render replies if any */}
                {replies.length > 0 && (
                    <div className="mt-4">
                        {replies.map((reply, index) => (
                            <div key={index} className="ml-4 p-2 border rounded mt-2 bg-gray-200">
                                {reply}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default PostedComments;
