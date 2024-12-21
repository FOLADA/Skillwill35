import Link from 'next/link'
import React from 'react'

const SecondNested = () => {
  return (
    <div>
      <h1>SECOND NESTED ROUTE</h1>
      <h1><button><Link href={"/Nested"}>Go Back</Link></button></h1>
    </div>
  )
}

export default SecondNested

