import { Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap'

const AboutPage = () => {

    return(
        <Container>
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                    We present a curated database of the best merchandise in the
                        country.
                        We verify that each merchandises are up to the standards that
                        client are looking for. We
                        also share review of what the customer think of our merchandise.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3></h3>
                        </CardHeader>
                    </Card>
                </Col>
                <Col></Col>

            </Row>
            <Row className='row-content'>
                 <Col sm='6'></Col>
                 <Col sm='6'></Col>
                 <Col></Col>
            </Row>
        </Container>
    )
}

export default AboutPage