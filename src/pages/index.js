import React, { Component } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import QuoteData from "../content/quotes.json"

const samplePageLinks = [
  {
    text: "Schedule",
    url: "schedule",
    badge: false,
    description: "Concert schedule",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Jason Awbrey | Baritone" />
    <div>
      <h1>Jason Awbrey | Baritone</h1>
      <StaticImage
        src="../images/jasonawbrey-sq-hp.jpg"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        placeholder="blurred"
        width={680}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h2>About</h2>
      <p>
        Heralded as having “one of the most gorgeous baritones on earth” by The
        Dallas Morning News, baritone Jason Awbrey is a Grammy® nominated vocal
        soloist and choral artist. His lyric voice has garnered critical acclaim
        for his performances of literature ranging from the early Renaissance
        period through the 21th century. In a recent recital of German lieder
        with Voces Intimae, Scott Cantrell of The Dallas Morning News said
        “everything sounded so easy, so natural” and “[it] was sheer magic.”
      </p>
      <p>
        He has performed with professional ensembles throughout the United
        States, Mexico, and Europe, including Ars Lyrica of Houston, Grammy®
        award-winning ensembles Conspirare and Roomful of Teeth, Dallas Bach
        Society, Dallas Symphony, Northeast Symphony, The Orchestra of New
        Spain, Orpheus Chamber Singers, Rapides Symphony Orchestra, San Antonio
        Symphony, Santa Fe Desert Chorale, Texas Camerata and Vox Humana. Jason
        has recorded with a number of ensembles including Conspirare, Orpheus
        Chamber Singers, Verdigris Ensemble, and Vox Humana.
      </p>
    </div>
    <h2>Recent Mentions</h2>
    <QuoteList feed={QuoteData} />
  </Layout>
)

class QuoteList extends Component {
  render() {
    const quote = this.props.feed.map((stream, i) => {
      return (
        <blockquote className="container--quote">
          <span>
            {stream.quote}
            <br />
            <cite>&mdash; {stream.cite}</cite>
          </span>
        </blockquote>
      )
    })
    return <div class="quotes">{quote}</div>
  }
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Jason Awbrey | Baritone" />

export default IndexPage
