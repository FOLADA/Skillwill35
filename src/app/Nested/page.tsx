import Link from 'next/link'
import React from 'react'

const Nested = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis praesentium aliquid cumque hic suscipit obcaecati voluptatum dolore non, deleniti, necessitatibus porro nobis eos asperiores, animi fuga illum dignissimos aliquam sequi perspiciatis consequuntur ipsum a! Reprehenderit nulla minus neque accusamus similique maxime voluptas veritatis voluptatem a obcaecati aliquid ex odit cumque enim, officiis mollitia dicta veniam voluptatibus praesentium sapiente aspernatur nisi blanditiis aperiam ea! Dolorem fugiat exercitationem similique, eligendi dolor nesciunt eius reprehenderit ullam id ea qui minus quibusdam modi harum iusto alias velit voluptate. Sed quis natus nisi error.</h1>
    <h1>For more details:
    <button><Link href={"/Nested/First"}>Click There</Link></button> or <button><Link href={"/Nested/Second"}>Click There</Link></button></h1>
    </div>
  )
}

export default Nested
