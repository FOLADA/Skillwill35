import Link from 'next/link'
import React from 'react'

const FirstNested = () => {
  return (
    <div>
      <h1>FIRST NESTED ROUTE</h1>
      <h1><button><Link href={"/Nested"}>Go Back</Link></button></h1>
    </div>
  )
}

export default FirstNested
