import React from 'react'
import {FaRocket,FaAlignCenter} from 'react-icons/fa';

export default function Header() {
  const navBar = {
    width:'100%',
    minHeight:'3em',
    backgroundColor:'#39393A',
    overflow: 'auto',
  }
  const title = {
    color:'#FF8552',
    fontSize:'17px',
    fontWeight:'bold',
    float: 'left',
    textAlign:'center',
    padding:'12px',
    textDecoration:'none',
  }
  const icon = {
    float:'left',
    textAlign:'center',
    padding:'12px',
    textDecoration:'none',
    color:'#E03616',
  }
  const icon2 = {
    float:'right',
    color:'#FF8552',
    padding:'12px', 
  }
  return (
    <div style = {navBar}>
      <div style = {icon}>
        <FaRocket size={20}/>
      </div>
      <a style = {title}> 
        BlastToPast
      </a>
      <div style = {icon2}>
        <FaAlignCenter size={20}/>
      </div>
    </div>
  )
}
