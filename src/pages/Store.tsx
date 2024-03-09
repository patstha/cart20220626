import { Row, Col } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'
import { Helmet } from 'react-helmet'

export function Store (): JSX.Element {
  return (
        <>
            <Helmet>
                <title>Store</title>
            </Helmet>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem { ...item} />
                    </Col>
                ))}
            </Row>
        </>
  )
}
