import { Card } from 'react-bootstrap';

const CardMedium = ({url,widthPercent}) => {
    return (
        <Card style={{ marginLeft:'1em', marginRight:'1em', marginTop:'1em', marginBottom:'1em',flex:widthPercent}}>
        <Card.Img variant="top" src={url} />  
      </Card>
    )
}

export default CardMedium;