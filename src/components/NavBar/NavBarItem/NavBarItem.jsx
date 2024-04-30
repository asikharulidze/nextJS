import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const NavLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

  &:hover {
    background-color: #111;
  }

  &.active {
    background-color: #22c55e;
  }
`;

const NavBarItem = ({ title, href }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <NavLink className={isActive ? "active" : ""} href={href} passHref>
      {title}
    </NavLink>
  );
};

export default NavBarItem;
