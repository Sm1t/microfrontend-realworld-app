import { Fragment } from 'react';

const Link = ({ activeClassName = '', ...props }) => (
  <a {...props} data-active={activeClassName} />
);

export const Header = () => {
  const currentUser = {
    username: 'Jhon',
    image:
      'https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg',
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link" href="/" activeClassName="active">
              Home
            </Link>
          </li>
          {currentUser ? (
            <Fragment>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/editor"
                  activeClassName="active"
                >
                  <i className="ion-compose" />
                  &nbsp;New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/settings"
                  activeClassName="active"
                >
                  <i className="ion-gear-a" />
                  &nbsp;Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href={`/profile/${currentUser.username}`}
                  activeClassName="active"
                >
                  {currentUser.image && (
                    <img src={currentUser.image} className="user-pic" alt="" />
                  )}
                  {currentUser.username}
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/login"
                  activeClassName="active"
                >
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/register"
                  activeClassName="active"
                >
                  Sign up
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};
