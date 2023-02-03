import React, { useState } from 'react';
import './Cards.css';
import {Button} from './Button'

function Cards() {
  const [cards] = useState([
    {
      title: 'Bolo 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 6',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 7',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 8',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    },
    {
      title: 'Bolo 9',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit autem velit reiciendis explicabo nulla sint nisi minima voluptas quod? Iusto deserunt obcaecati consequatur nostrum facilis eligendi neque in quidem.'
    }
  ])

  return (
    <section>
      <div className='cards-container'>
        <div className="cards">
          {
            cards.map((card, i) => (
              <div key={i} className="card">
                <h1>{card.title}</h1>
                <p>
                  {card.text}
                </p>
                <Button>
                  Compre
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Cards