/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const links = [
  {
    text: "About",
    url: "/",
    description: "About",
  },
  {
    text: "Schedule",
    url: "/schedule",
    description: "Concert schedule",
  },
  {
    text: "Audio",
    url: "https://soundcloud.com/jason-awbrey",
    description: "Audio",
    target: "_blank",
  },
  {
    text: "Instagram",
    url: "https://instagram.com/jawbritone",
    description: "@jawbritone",
    target: "_blank",
  },
  {
    text: "Youtube",
    url: "https://www.youtube.com/@jhawbrey/videos",
    description: "Youtube",
    target: "_blank",
  },
]

const Nav = data => {
  return (
    <div className="nav">
      {links.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}`}>{link.text}</a>
          {i !== links.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <h1>Jason Awbrey | Baritone</h1>
        {Nav(links)}
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          {Nav(links)}
          <p>© {new Date().getFullYear()} &middot; Jason Awbrey</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
