import React from 'react';
import './Plans.css';

const Plans = () => {
  const plansData = [
    {
      name: 'Premium',
      backgroundContent: 'Premium Plans',
      image: './r3.png'
    },
    {
      name: 'Standard',
      backgroundContent: 'Standard Plans',
      image: './hero-image.png'
    },
    {
      name: 'Basic',
      backgroundContent: 'Basic Plans',
      image: './i4.jpg'
    }
  ];

  return (
    <section className='p-wrapper'>
      <div className='paddings innerWidth p-container'>
        <div className="p-head flexColStart">
          <span className='orangeText'>What we design</span>
          <span className='primaryText'>Plans</span>
        </div>
        <div className='p-card'>
          {plansData.map((plan, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <span>{plan.name}</span>
              </div>
              <div className="card-image">
                <img src={plan.image} alt="Card Image" />
              </div>
              <div className="card-background">
                <span>Click to visit {plan.backgroundContent} & Designs</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
