import { Card, CardImg, CardText, CardBody, Col, Button } from 'reactstrap';

const EquinosaDetail = ( {equinosa} ) => {
    const { image, name, description } = equinosa;

    return (
        <Col md='5' className='m-1'>
             
            <Card>
            
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default EquinosaDetail;