import { Col, Row } from 'reactstrap'
import DisplayCard from './DisplayCard'
import {selectFeaturedEquinosa } from '../equinosas/EquinosasSlice'
import { selectFeaturedPromotion } from '../promotions/promotionsSlice'

const DisplayList = () => {
    const items = [selectFeaturedEquinosa(), selectFeaturedPromotion()]

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                <Col md className='m-1' key={idx}>
                    <DisplayCard item={item} />
                </Col>
                )
            })}
        </Row>
    )
}

export default DisplayList