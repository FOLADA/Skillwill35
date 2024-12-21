import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button><h1><Link href={"/Nested"}>GO TO THE OTHER PAGE</Link></h1></button>
    </div>
  )
}

export default Home
