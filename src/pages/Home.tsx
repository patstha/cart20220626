import { Helmet } from 'react-helmet'
import './styles.css' // import the CSS file

export function Home (): JSX.Element {
  return <>
    <h1>Home, sweet home</h1>
    <Helmet>
      <title>Home</title>
    </Helmet>
    </>
}
