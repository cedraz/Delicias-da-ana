import React from 'react';
import Herosection from '../components/Herosection';
import svg from '../img/homeCakeSvg.svg';
import Sobre from '../components/Sobre'

const heroData = {
  description: 'Confira nosso cardápio',
  src: svg,
  alt: 'home cake image',
  buttonLabel: 'Fazer pedido'
}

function Home() {
  return (
    <>
      <Herosection {...heroData} />
      <Sobre/>
    </>
  )
}

export default Home