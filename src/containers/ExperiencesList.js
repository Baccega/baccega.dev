import React from "react"
import { createUseStyles } from "react-jss"
import "../styles/bulma.scss"
import { useStaticQuery, graphql } from "gatsby"
import ListHeading from "../components/ListHeading"
import {
  PersonalExperienceCard,
  WorkExperienceCard,
} from "../components/ExperienceCard"

const useStyles = createUseStyles(theme => ({
  root: {
    padding: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 0,
    },
    display: "flex",
    flexDirection: "column",
  },
}))

const ExperiencesList = ({ listContent }) => {
  const styles = useStyles()
  const staticData = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              type
              company
              role
              from
              to
              tags
            }
            body
          }
          node {
            frontmatter {
              type
              project
              period
              role
              tags
            }
            body
          }
        }
      }
    }
  `)
  const listData = staticData.allMdx.edges.filter(
    ({ node }) => node.frontmatter.type === listContent
  )

  return (
    <div className={`${styles.work} ${styles.root}`}>
      <ListHeading listContent={listContent} />
      {listData.map(({ node }) =>
        listContent === "personal" ? (
          <PersonalExperienceCard key={node.id} {...node} />
        ) : (
          <WorkExperienceCard key={node.id} {...node} />
        )
      )}
    </div>
  )
}

export default ExperiencesList
