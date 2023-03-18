import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import SchedData from "../content/schedule.json"

let concerts = []
let pastConcerts = []

const sortList = (data, dir) => {
  data.sort(function (a, b) {
    if (dir === "descend") {
      return new Date(b.timestamp) - new Date(a.timestamp)
    } else {
      return new Date(a.timestamp) - new Date(b.timestamp)
    }
  })
}

const scheduleList = data => {
  return (
    <ul className={styles.list}>
      {data.map((date, i) => (
        <li key={i} className={styles.listItem}>
          <a className={styles.listItemLink} href={`${date.url}`}>
            {date.date} ↗
          </a>
          <p className={styles.listItemDescription}>
            {date.organization}
            <br />
            {date.title}
            <br />
            {date.venue}
            <br />
            {date.time}
          </p>
        </li>
      ))}
    </ul>
  )
}

for (var i = 0; i < SchedData.length; i++) {
  let cDate = new Date(SchedData[i].timestamp)
  const today = new Date()
  if (cDate > today) {
    concerts.push(SchedData[i])
  } else {
    pastConcerts.push(SchedData[i])
  }
}

sortList(pastConcerts, "descend")
sortList(concerts, "ascend")

const Schedule = () => (
  <Layout>
    <h1>Jason Awbrey | Baritone</h1>
    <h2>Schedule</h2>
    {scheduleList(concerts)}
    <h2>Past Concerts</h2>
    {scheduleList(pastConcerts)}
  </Layout>
)

export default Schedule
