import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let centerNav = (
    <div className="center-nav">
      <Link href="/">
        <a data-active={isActive("/")}>
          <img alt="Brand" className="logo-image" src="/jellopan-logo-transparent.png"/>
        </a>
      </Link>
    </div>
  );

  return (
    <nav>
      {centerNav}
    </nav>
  );
};

export default Header;
