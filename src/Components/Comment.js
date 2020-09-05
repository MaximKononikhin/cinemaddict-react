import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../Store/actions';

const Comment = (props) => {
  const {comment} = props;

  const dispatch = useDispatch();

  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img src={`/images/emoji/${comment.emotion}.png`} width="55" height="55" alt="emoji-smile" />
      </span>
      <div>
        <p className="film-details__comment-text">{comment.comment}</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{comment.author}</span>
          <span className="film-details__comment-day">{moment(comment.date).format('YYYY/MM/DD HH:mm')}</span>
          <button className="film-details__comment-delete" onClick={(evt) => {
            evt.preventDefault();
            dispatch(deleteComment(comment.id));
          }}>Delete</button>
        </p>
      </div>
    </li>
  )
};

export default Comment;