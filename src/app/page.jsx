'use client';

import React from 'react';
import testimonials from './data/testimonials.json';
import { Testimonial } from './components/Testimonial';
import { Slide, Fade } from 'react-awesome-reveal';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Home() {
  return (
    <div id='homepage'>
       <FloatingWhatsApp  />

      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="bold title">
                <span className="color-green">Tech</span>
                <span className="color-red">R</span>
                <span className="color-yellow">S</span>
              </h1>

              <Slide>
                <p className='subtitle'>O Projeto Educacional de programação do Rio Grande do Sul</p>
                <p className='subtitle'>Conectando o estado ao futuro da tecnologia, com cursos,
                conteúdos<br /> exclusivos e uma comunidade ativa.</p>
              </Slide>


              <br />
              <Slide direction="right">
              <button className="btn btn-primary btn-lg">
                Explore Nosso Conteúdo
              </button>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Fade>
                <h1 className="bold">Quem somos</h1>
                <p>O TechRS é uma iniciativa dedicada a ensinar programação com
                foco no estado do Rio Grande do Sul. Nosso objetivo é
                democratizar o acesso ao conhecimento tecnologico e criar
                oportunidades para todos.
                </p>
              </Fade>
            </div>

            <div className="col-md-6">
              <Fade>
                <h3 className="bold">Missão e Valores</h3>
                <p>Promover educação de qualidade, inclusão digital e
                  o fortalecimento da comunidade de desenvolvedores no RS
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section id="learn">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className='bold text-center'>Contéudo Exclusivo</h2>
              <p className='text-center'>Aprenda programação com a nossa comunidade.</p>
              <hr />
              <br />

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <Slide direction='left'>
                          <div className="panel panel-default">
                            <div className="panel-body">
                              <h3 className="bold">
                                <i className="fa-solid fa-lines-leaning" style={{ marginRight: 8 }}></i>
                                Aprenda fazendo <small>| Learn by doing</small>
                              </h3>
                              <p>Focamos no desenvolvimento do conhecimento através
                              da prática, com projetos reais e desafios semanais.
                              </p>
                            </div>
                          </div>

                          <div className="panel panel-default">
                            <div className="panel-body">
                              <h3 className="bold">
                                <i className="fa-solid fa-person-hiking" style={{ marginRight: 8 }}></i> Desafie-se
                              </h3>
                              <p>Desenvolva suas habilidades com desafios semanais
                              e projetos práticos, com feedback da comunidade.
                              </p>
                            </div>
                          </div>

                          <div className="panel panel-default">
                            <div className="panel-body">
                              <h3 className="bold">
                                <i className="fa-solid fa-user-group" style={{ marginRight: 8 }}></i> Força da comunidade
                              </h3>
                              <p>Buscamos diariamente a criação de um ambiente colaborativo
                              e inclusivo, aonde todos possam aprender e ensinar os membros mais novos.
                              </p>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <Fade>
                      <h3 className="bold">Nossa Stack</h3>
                      <p>No techRS, focamos nas tecnologias<br /> 
                      mais demandadas do mercado, incluindo:</p>
                    </Fade>
                    <hr />

                    <br />

                    <div className="row">
                      <Slide direction='right'>
                        <div className="col-md-6">
                          <div className="panel panel-default">
                            <div className="panel-body">
                              <h2 className="bold">
                                <i className="fa-solid fa-display"></i>
                              </h2>
                              <h4 className="bold">Front-End</h4>
                              <p>HTML, CSS, Javascript e React.js
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="panel panel-default">
                            <div className="panel-body">
                              <h2 className="bold">
                                <i className="fa-solid fa-code"></i>
                              </h2>
                              <h4 className="bold">Back-end</h4>
                              <p>Node.js, Ruby on Rails, Express e Python</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="panel panel-default">
                            <div className="panel panel-body">
                              <h2 className="bold">
                                <i className="fa-solid fa-database"></i>
                              </h2>
                              <h4 className="bold">Banco de Dados</h4>
                              <p>MySQL, PostgreSQL, MongoDB.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="panel panel-default">
                            <div className="panel panel-body">
                              <h2 className="bold">
                                <i class="fa-solid fa-infinity"></i>
                              </h2>
                              <h4 className="bold">DevOps</h4>
                              <p>Noções de Docker e Git para 
                              desenvolvimento colabortivo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Slide direction='up'>
                <h2 className="bold text-center">Acompanhe o techRS nas redes</h2>
                <p className="text-center">Siga-nos nas <span className="bold">redes sociais
                </span> e fique por dentro de dicas e novidades.</p>
                <br />
              </Slide>

              <Slide direction='up'>
                <ul className="list-unstyled list-inline social-list text-center">
                  <li>
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i className="fa-brands fa-discord"></i>
                    </a>
                  </li>
                </ul>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="row">
            <h2 className="bold text-center">Depoimentos</h2>
            <p className="text-center">O que nossa comunidade diz sobre nós.</p>
            <br />
          
            {testimonials.map((testimonial) => (
              <Testimonial 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ))}            
          </div>
        </div>
      </section>
    </div>
  );
}