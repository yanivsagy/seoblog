import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';

Router.onRouteChangeStart = (url) => {
  return NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
  return NProgress.done();
};

Router.onRouteChangeError = (url) => {
  return NProgress.done();
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
          <Navbar color="light" light expand="md">

            { isAuth() ?
              (
                <NavbarBrand style={{ cursor: 'pointer' }}>
                  <Link href="/">
                    <NavLink className="font-weight-bold text-dark">
                      { APP_NAME }
                    </NavLink>
                  </Link>
                </NavbarBrand>
              ) :
              (
                <NavbarBrand style={{ cursor: 'pointer' }}>
                  <NavLink className="font-weight-bold text-dark">
                    { APP_NAME }
                  </NavLink>
                </NavbarBrand>
              )
            }

            <NavbarToggler onClick={ toggle } />
            <Collapse isOpen={ isOpen } navbar>
              <Nav className="ml-auto" navbar>

                { isAuth() && (
                  <NavItem style={{ cursor: 'pointer' }}>
                    <Link href="/blogs">
                      <NavLink>
                        Blogs
                      </NavLink>
                    </Link>
                  </NavItem>
                ) }

                { isAuth() && (
                  <NavItem style={{ cursor: 'pointer' }}>
                    <Link href="/contact">
                      <NavLink>
                        Contact
                      </NavLink>
                    </Link>
                  </NavItem>
                ) }

                { !isAuth() && (
                  <React.Fragment>
                    <NavItem style={{ cursor: 'pointer' }}>
                      <Link href="/signin">
                        <NavLink>
                          Sign In
                        </NavLink>
                      </Link>
                    </NavItem>
                    <NavItem style={{ cursor: 'pointer' }}>
                      <Link href="/signup">
                        <NavLink>
                          Sign Up
                        </NavLink>
                      </Link>
                    </NavItem>
                  </React.Fragment>
                ) }

                { isAuth() && isAuth().role === 0 && (
                  <NavItem>
                    <Link href="/user">
                      <NavLink style={{ cursor: 'pointer' }}>
                        {`${ isAuth().name}'s Dashboard`}
                      </NavLink>
                    </Link>
                  </NavItem>
                ) }

                { isAuth() && isAuth().role === 1 && (
                  <NavItem>
                    <Link href="/admin">
                      <NavLink style={{ cursor: 'pointer' }}>
                        {`${ isAuth().name}'s Dashboard`}
                      </NavLink>
                    </Link>
                  </NavItem>
                ) }

                { isAuth() && (
                  <NavItem>
                    <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.push('/signin')) }>
                      Sign Out
                    </NavLink>
                  </NavItem>
                ) }

                { isAuth() && isAuth().role === 0 && (
                  <NavItem style={{ cursor: 'pointer' }}>
                    {/* <Link href="/user/crud/blog"> */}
                      <NavLink href="/user/crud/blog" className="btn btn-primary text-light">
                        Create Blog
                      </NavLink>
                    {/* </Link> */}
                  </NavItem>
                ) }

              </Nav>
            </Collapse>
          </Navbar>
          { isAuth() && <Search/> }
        </div>
      );
}

export default Header;