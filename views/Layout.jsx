/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/signin.css" />
        <link rel="stylesheet" href="/css/signin_patch.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />

        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <script defer src="/js/client.js" />
        <title>{title}</title>
      </head>
      <body>
        <Header user={user} />
          {children}
        <Footer />
      </body>
    </html>
  );
};
