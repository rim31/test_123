import React from 'react'
import { StoreContainer } from '../Store';

export default function Home() {
  const unstated = StoreContainer.useContainer();

  // React.useEffect(() => {
  //   console.log("unstated acc", unstated.accessories)
  //   console.log("unstated shi", unstated.shirts)
  //   console.log("unstated jac", unstated.jackets)
  //   // eslint-disable-next-line 
  // }, [unstated.accessories, unstated.shirts, unstated.jackets])

  React.useEffect(() => {
    // unstated.start();
    console.log("loading : ", unstated.loading)
    // eslint-disable-next-line 
  }, [])
  return (
    <div>
      Home
      {}
    </div>
  )
}
