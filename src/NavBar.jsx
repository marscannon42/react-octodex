import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <h2 className="navbar-start">
              <a href="https://octodex.github.com/" className="navbar-item">
                Octodex
              </a>
            </h2>
          </div>

          <h2 className="navbar-start">
            <a href="https://octodex.github.com/" className="navbar-item">
              Home
            </a>

            <a href="https://octodex.github.com/faq/" className="navbar-item">
              FAQ
            </a>
          </h2>

          <h2 className="navbar-end">
            <a href="https://twitter.com/githubdesign" className="navbar-item">
              Follow us on Twitter
            </a>

            <a href="https://github.com/" className="navbar-item">
              Back to GitHub.com
            </a>
          </h2>
        </nav>
      </>
    )
  }
}

export default Nav
