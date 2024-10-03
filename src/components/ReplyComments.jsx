import React, { useContext, useState } from 'react';
import { CommentContext } from './CommentContext';

const ReplyComments = ({ id }) => {
    const { handleReply } = useContext(CommentContext);
    const [replyComment, setReplyComment] = useState('');

    const handleReplyClick = () => {
        if (replyComment.trim()) {
            handleReply(replyComment, id);
            setReplyComment('');
        }
    };

    return (
        <div className="flex flex-col items-end gap-6 mt-4 w-full md:w-9/12">
            <textarea
                rows={3}
                cols={5}
                value={replyComment}
                onChange={(e) => setReplyComment(e.target.value)}
                className="rounded resize-none w-full px-4 bg-gray-100 border border-gray-400 placeholder-gray-400 focus:outline-none focus:bg-white"
                placeholder="post a reply..."
            />
            <button onClick={handleReplyClick} className="bg-cyan-600 hover:bg-cyan-900 text-white font-semibold px-2 py-2 rounded-md transition-all">
                Reply
            </button>
        </div>
    );
};

export default ReplyComments;
