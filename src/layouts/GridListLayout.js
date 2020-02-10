import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  root: {
    display: "grid",
    color: theme.color,
    backgroundColor: theme.colorPrimary,
    paddingBottom: 20,
    width: "100vw",
    gridTemplateColumns: "1fr 10px 1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'left divider right'",
    gridRowGap: 10,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  },
  "@media (max-width: 1024px)": {
    root: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto",
      gridTemplateAreas: "'left' 'right'",
    },
  },
}))

const GridListLayout = props => {
  const styles = useStyles()
  return <div className={styles.root}>{props.children}</div>
}

export default GridListLayout
