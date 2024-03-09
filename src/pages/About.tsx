import { type ReactElement } from 'react'
import { Helmet } from 'react-helmet'

export function About (): ReactElement {
  return <>
  <h1>About us</h1>
  <Helmet>
    <title>About us</title>
  </Helmet>
  </>
}
