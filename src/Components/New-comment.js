import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../Store/actions';

const stateComment = {
  id: String(new Date() + Math.random()),
  emotion: null,
  comment: ``,
  date: new Date(Date.now())
};

const commentReducer = (state = stateComment, action) => {
  switch (action.type) {
    case `SET_EMOJI`:
      return {
        ...state,
        emotion: action.payload
      }

    case `SET_COMMENT`: 
      return {
        ...state,
        comment: action.payload
      }
      
    default: return state;
  }
}

const NewComment = ({movieId}) => {

  const dispatchRedux = useDispatch();
  const [state, dispatchComment] = useReducer(commentReducer, stateComment)

  return (
    <div className="film-details__new-comment">
      <div className="film-details__emoji-list" onChange={
        (evt) => {
          dispatchComment({type: `SET_EMOJI`, payload: evt.target.value});
        }
        }>
        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" />
        <label className="film-details__emoji-label" htmlFor="emoji-smile">
          <img src="/images/emoji/smile.png" width="30" height="30" alt="emoji"/>
        </label>

        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" />
        <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
          <img src="/images/emoji/sleeping.png" width="30" height="30" alt="emoji" />
        </label>

        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" />
        <label className="film-details__emoji-label" htmlFor="emoji-puke">
          <img src="/images/emoji/puke.png" width="30" height="30" alt="emoji" />
        </label>

        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" />
        <label className="film-details__emoji-label" htmlFor="emoji-angry">
          <img src="/images/emoji/angry.png" width="30" height="30" alt="emoji" />
        </label>
      </div>
      <label className="film-details__comment-label">
        <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment" onChange={(evt) => {
          dispatchComment({type: `SET_COMMENT`, payload: evt.target.value});
        }}></textarea>
      </label>
      <button className="film-details__send-btn" onClick={(evt) => {
        evt.preventDefault();
        dispatchRedux(addComment(state, movieId));
      }}>Send</button>
  </div>
  )
}

export default NewComment;