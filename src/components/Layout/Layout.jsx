import React from 'react';
import { Outlet } from 'react-router-dom'
import Card from '../Card/Card';
export default function Layout() {
  return (
<>
<Outlet></Outlet>
<Card/>
</>
)
}
