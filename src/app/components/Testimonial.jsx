import React from 'react';
import { Slide } from 'react-awesome-reveal';

export const Testimonial = ({ testimonial }) => {
  const { avatarUrl, name, body, position } = testimonial;
  
  return (
    <Slide direction='right'>
      <div className="testimonial col-md-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <p className='body'>
              <i className="fa-solid fa-quote-left" style={{marginRight: 8}}></i>
              {body}
              <i className="fa-solid fa-quote-right" style={{marginLeft: 8}}></i>
            </p>
            <ul className="list-unstyled list-inline text-right">
              <li className='bold position'>{position}</li>
              <li>
                | <span className='name'>{name}</span>
                <img src={avatarUrl} className='avatar-sm' alt={name} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
};