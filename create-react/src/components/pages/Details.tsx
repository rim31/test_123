import React from 'react'
import { StoreContainer } from '../Store';

export default function Details() {
  const unstated = StoreContainer.useContainer();

  React.useEffect(() => {
    console.log("movies : ", unstated.movies)
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <h1>Details</h1>
    </div>
  )
}
