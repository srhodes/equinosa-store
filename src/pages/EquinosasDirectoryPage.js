import { Container}  from 'reactstrap';
import EquinosasList from '../features/equinosas/EquinosasList';
import SubHeader from '../components/SubHeader';

const EquinosasDirectoryPage = () => {
    return (
        <Container> 
            <SubHeader current='Directory'/>
            <EquinosasList />
        </Container>
    );
};

export default EquinosasDirectoryPage;