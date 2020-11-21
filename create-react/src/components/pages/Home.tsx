import React from 'react'
import { StoreContainer } from '../Store';
import { Link } from 'react-router-dom';

export default function Home() {
  const unstated = StoreContainer.useContainer();

  React.useEffect(() => {
    console.log("loading : ", unstated.loading)
    // eslint-disable-next-line 
  }, [])

  return (
    <div>

    {/* Header - cover */}
      <section className="showcase">
        <img src="./cover.jpg" alt="cover shop" />
        <div className="overlay">
          <h2>WELCOME</h2>
          <p>
            My e-commerce , simply visit and check different articles
            </p>
        </div>
      </section>

      {unstated.loading && (<h1>Loading ...</h1>)}

    {/* Route - articles */}
      <div className="flex">
        <Link to='/jackets'>
          <figure className="photo red">
            <img src="./jackets.jpg" alt="jackets" />
            <figcaption>
              <h2>Your  <span> Jackets</span></h2>
            </figcaption>
          </figure>
        </Link>
        <Link to='/shirts'>
          <figure className="photo blue">
            <img src="./shirts.jpg" alt="shirt" />
            <figcaption>
              <h2>Your  <span> Shirts</span></h2>
            </figcaption>
          </figure>
        </Link>
        <Link to='/accessories'>
          <figure className="photo">
            <img src="./accessories.jpg" alt="accessories" />
            <figcaption>
              <h2>Your <span> Accessories</span></h2>
            </figcaption>
          </figure>
        </Link>
      </div>

    </div>
  )
}
