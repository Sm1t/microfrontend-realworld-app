import { Fragment } from 'react';

import { RouterLink } from '../router-link';

export const Header = () => {
  const currentUser = null as unknown as { username: string; image: string };
  // const currentUser = {
  //   username: 'Jhon',
  //   image:
  //     'https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg',
  // };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <RouterLink className="navbar-brand" href="/">
          conduit
        </RouterLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <RouterLink className="nav-link" href="/" activeClassName="active">
              Home
            </RouterLink>
          </li>
          {currentUser ? (
            <Fragment>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  href="/editor"
                  activeClassName="active"
                >
                  <i className="ion-compose" />
                  &nbsp;New Post
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  href="/settings"
                  activeClassName="active"
                >
                  <i className="ion-gear-a" />
                  &nbsp;Settings
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  href="/profile/$username"
                  params={{ username: currentUser.username }}
                  activeClassName="active"
                >
                  {currentUser.image && (
                    <img src={currentUser.image} className="user-pic" alt="" />
                  )}
                  {currentUser.username}
                </RouterLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  href="/login"
                  activeClassName="active"
                >
                  Sign in
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  href="/register"
                  activeClassName="active"
                >
                  Sign up
                </RouterLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};
