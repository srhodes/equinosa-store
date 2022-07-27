import { Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { selectEquinosaById } from '../features/equinosas/EquinosasSlice'
import EquinosaDetail from '../features/equinosas/EquinosaDetail'
import CommentsList from '../features/comments/CommentsList'

const EquinosaDetailPage = () => {
    const { equinosaId } = useParams()
    const equinosa = selectEquinosaById(equinosaId)

    return (
        <Container>
            <Row>
                <EquinosaDetail equinosa={equinosa}/>  
                <CommentsList equinosaId={equinosaId}/>
            </Row>
        </Container>
    )
}

export default EquinosaDetailPage