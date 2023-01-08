import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div style={{padding:"19px",backgroundColor:"grey",textAlign:"center",fontSize:"23px"}}>
        <Link style={{marginRight:"30px"}} href="/">Home</Link>
        <Link href="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar;