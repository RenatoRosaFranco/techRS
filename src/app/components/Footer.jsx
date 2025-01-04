import React from 'react';
import { NewsletterForm } from './forms/NewsletterForm';

export const Footer = () => {
  return(
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-4">
              <h4 className="bold">Links Rápidos</h4>
              <ul className="list-unstyled list-inline" id='contact'>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#blog">Conteúdo</a>
                </li>
                <li>
                  <a href="#social">Redes Sociais</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
              <br />

              <h4 className="bold">Políticas</h4>
              <ul className="list-unstyled list-inline">
                <li>
                  <a href="#">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-md-offset-1" id='social'>
              <h4 className="bold">Redes Sociais</h4>
              <ul className="list-unstyled list-inline social-list">
                <li>
                  <a href={process.env.REACT_APP_FACEBOOK_URL}>
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={process.env.REACT_APP_INSTAGRAM_URL}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={process.env.REACT_APP_YOUTUBE_URL}>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href={process.env.REACT_APP_TIKTOK_URL}>
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href={process.env.REACT_APP_DISCORD_URL}>
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </li>
              </ul>  
            </div>

            <div className="col-md-3">
              <h4 className="bold">Newsletters</h4>
              <p>Receba nossas novidades</p>
              <br />

              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};