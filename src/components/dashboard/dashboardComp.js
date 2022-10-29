import React from 'react'
import car1 from '../../images/car1.jpg'
import car2 from '../../images/car2.jpg'
import car3 from '../../images/car3.jpg'
import CardComp from './cardsComp'
import SmallCardsComp from './smallCardsComp'
function Dashboard() {
  return (
    <div> 
    <div className='row p-3'>       
  <SmallCardsComp //Small cards 
  title='Mercedes'
  figure='50'
  />
    <SmallCardsComp //Small cards 
  title='Mehran'
  figure='500'
  />
    <SmallCardsComp //Small cards 
  title='Corolla'
  figure='20'
  />
    <SmallCardsComp //Small cards 
  title='Civic'
  figure='250'
  />
    </div>

    <div className='row mt-5'>
      
    <CardComp  //cards with images 
       className='col-4'
      url={car1}
      title='Range Rovers'
      desc="Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles"
      />
      <CardComp   //cards with images
      className='col-4'
      url={car2}
      title='Mercedes'
      desc="SMercedes-Benz, commonly referred to as Mercedes and sometimes as Benz,"
      />
       <CardComp   //cards with images
       className='col-4'
      url={car3}
      title='BMW'
      desc="Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational "
      />
     
     
    </div>
    </div>
  )
}

export default Dashboard