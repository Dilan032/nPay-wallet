import React from 'react'
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <>
        <Link to={props.url} >{props.linkName}</Link>
    </>
  )
}

export default NavLinks