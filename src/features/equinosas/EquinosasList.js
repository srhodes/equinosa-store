import { EQUINOSAS } from '../../app/shared/EQUINOSAS';
import { Col, Row, } from 'reactstrap';
import EquinosaCard from "./EquinosaCard";
import { selectAllEquinosas } from './EquinosasSlice';

const EquinosasList = () => {
    const equinosas = selectAllEquinosas();

    return (     
        <Row className="ms-auto">
            {equinosas.map((equinosa) => {
                return (
                    <Col 
                        md="5" 
                        className="m-4" 
                        key={equinosa.id} 
                    >
                        <EquinosaCard equinosa={equinosa} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default EquinosasList;