import React from 'react';

const Footer = ({movies}) => {
  return (
    <footer className="footer">
      <h2 className="footer__logo logo logo--smaller">Cinemaddict</h2>
      <section className="footer__statistics">
        <p>{movies.length} movies inside</p>
      </section>
    </footer>
  )
}

export default Footer;