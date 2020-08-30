import React from 'react';
import {Link} from 'react-router-dom';

const MovieDetails = () => {
  return (
    <section className="film-details">
      <form className="film-details__inner">
        <div className="htmlForm-details__top-container">
          <div className="film-details__close">
            <Link to='/' className="film-details__close-btn" type="button"></Link>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img className="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="" />

              <p className="film-details__age">18+</p>
            </div>

            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">The Great Flamarion</h3>
                  <p className="film-details__title-original">Original: The Great Flamarion</p>
                </div>

                <div className="film-details__rating">
                  <p className="film-details__total-rating">8.9</p>
                </div>
              </div>

              <table className="film-details__table">
                <tbody>
                <tr className="film-details__row">
                  <td className="film-details__term">Director</td>
                  <td className="film-details__cell">Anthony Mann</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Writers</td>
                  <td className="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Actors</td>
                  <td className="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Release Date</td>
                  <td className="film-details__cell">30 March 1945</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Runtime</td>
                  <td className="film-details__cell">1h 18m</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Country</td>
                  <td className="film-details__cell">USA</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Genres</td>
                  <td className="film-details__cell">
                    <span className="film-details__genre">Drama</span>
                    <span className="film-details__genre">Film-Noir</span>
                    <span className="film-details__genre">Mystery</span></td>
                </tr>
                </tbody>
              </table>

              <p className="film-details__film-description">
                The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
              </p>
            </div>
          </div>

          <section className="film-details__controls">
            <input type="checkbox" className="film-details__control-input visually-hidden" id="watchlist" name="watchlist" />
            <label htmlFor="watchlist" className="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" className="film-details__control-input visually-hidden" id="watched" name="watched" />
            <label htmlFor="watched" className="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" className="film-details__control-input visually-hidden" id="favorite" name="favorite" />
            <label htmlFor="favorite" className="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div className="htmlForm-details__bottom-container">
          <section className="film-details__comments-wrap">
            <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">4</span></h3>

            <ul className="film-details__comments-list">
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile" />
                </span>
                <div>
                  <p className="film-details__comment-text">Interesting setting and a good cast</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">Tim Macoveev</span>
                    <span className="film-details__comment-day">2019/12/31 23:59</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping" />
                </span>
                <div>
                  <p className="film-details__comment-text">Booooooooooring</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke" />
                </span>
                <div>
                  <p className="film-details__comment-text">Very very old. Meh</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry" />
                </span>
                <div>
                  <p className="film-details__comment-text">Almost two hours? Seriously?</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">Today</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <div className="film-details__new-comment">
              <div htmlFor="add-emoji" className="film-details__add-emoji-label"></div>

              <label className="film-details__comment-label">
                <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div className="film-details__emoji-list">
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" />
                <label className="film-details__emoji-label" htmlFor="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji"/>
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" />
                <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" />
                <label className="film-details__emoji-label" htmlFor="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" />
                <label className="film-details__emoji-label" htmlFor="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji" />
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section >
  )
}

export default MovieDetails;