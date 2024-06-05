import React from 'react';
import { NavLink } from 'react-router-dom';
const MobileMenuItem = ({
  title,
  path,
  svg,
  chevronDown,
  classes,
  children,
}) => {
  return (
    <div className={`flex w-full flex-col ${chevronDown ? '' : ''}`}>
      <li
        className={`relative flex justify-between items-center child:flex child:py-2 w-full h-full  transition-all`}
      >
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? 'text-orange-300 bg-orange-200/30 w-full rounded-lg pr-2.5'
              : 'pr-2.5'
          }
        >
          <span className="flex gap-2 w-full">
            {svg}
            {title}
          </span>
        </NavLink>
        {chevronDown && chevronDown}
      </li>
      {children}
    </div>
  );
};

export default MobileMenuItem;
