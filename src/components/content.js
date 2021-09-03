import { Container } from 'react-bootstrap';
import CardMedium from './card';
import SubFooter from './SubFooter';

const Content = () => {
    return(
        <>
        <Container>

            <h4 className="d-flex justify-content-center mt-3">
                IN THE SPOTLIGHT
            </h4>

            <div className="d-flex flex-wrap justify-content-between">
                <CardMedium  url="/sm-image.gif" widthPercent="40%"/>
                <CardMedium  url="/sm-image2.gif" widthPercent="40%"/>
                <CardMedium  url="/img4.jpg" widthPercent="40%"/>
                <CardMedium  url="/img5.jpg" widthPercent="40%"/>
                <CardMedium  url="/img6.jpg" widthPercent="40%"/>
                <CardMedium  url="/img7.jpg" widthPercent="40%"/>
                <CardMedium  url="/img8.jpg" widthPercent="40%"/>
                <CardMedium  url="/img9.jpg" widthPercent="40%"/>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src="/banner.jpg" alt="banner"/>
            </div>
            <h4 className="d-flex justify-content-center mt-3">
                ONLY AT EYECANDY
            </h4>
            <div className="d-flex flex-wrap justify-content-between">
                <CardMedium  url="/img10.jpg" widthPercent="40%"/>
                <CardMedium  url="/img11.jpg" widthPercent="40%"/>
                <CardMedium  url="/img12.jpg" widthPercent="40%"/>
                <CardMedium  url="/sm-image3.gif" widthPercent="40%"/>
            </div>
            <h4 className="d-flex justify-content-center mt-3">
                FEATURED BRANDS
            </h4>
            <div className="d-flex flex-wrap justify-content-between">
                <CardMedium  url="/b1.jpg" widthPercent="20%"/>
                <CardMedium  url="/b2.jpg" widthPercent="20%"/>
                <CardMedium  url="/b3.jpg" widthPercent="20%"/>
                <CardMedium  url="/b4.jpg" widthPercent="20%"/>
                <CardMedium  url="/b5.jpg" widthPercent="20%"/>
                <CardMedium  url="/b6.jpg" widthPercent="20%"/>
                <CardMedium  url="/b7.jpg" widthPercent="20%"/>
                <CardMedium  url="/b8.jpg" widthPercent="20%"/>
            </div>
            
        </Container>
        <SubFooter />
        </>
    )
}

export default Content;