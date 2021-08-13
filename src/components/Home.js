import React from 'react'
import Section from './Section'

function Home() {
    return (
      <div>
        <Section
          title="Model S"
          text="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Model Y"
          text="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Model 3"
          text="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Model X"
          text="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Solar Panels"
          text="Lowest Cost Solar Panels in America"
          backgroundImg="solar-panel.jpg"
          leftButton="Order now"
          rightButton="Learn now"
        />
        <Section
          title="Solar Roof"
          text="Lowest Cost Solar Panels in America"
          backgroundImg="solar-roof.jpg"
          leftButton="Order now"
          rightButton="Learn now"
        />
        <Section
          title="Accessories"
          text=""
          backgroundImg="accessories.jpg"
          leftButton="Order now"
          rightButton="Learn now"
        />
      </div>
    );
}

export default Home
