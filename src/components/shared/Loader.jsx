import React from 'react'

import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div style={{
        width:"100%",
        height:"1000px", 
        display:"flex", 
        justifyContent:"center", 
        paddingTop:"200px"
        }}>

      <TailSpin visible={true} width="100" height="100" color="#4fa94d" ariaLabel="infinity-spin-loading"/>
      
    </div>
  )
}

export default Loader
