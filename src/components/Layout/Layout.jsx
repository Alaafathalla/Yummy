import React from 'react';
import Card from 'Card/Card.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
<>
<Outlet> </Outlet>
<Card/>
</>

)
}
