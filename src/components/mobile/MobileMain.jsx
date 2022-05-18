import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MobileMain() {
  return (
    <div>
        Main
        <Outlet />
    </div>
  );
}