import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';

const SubFooter = () => {
    return (
        <footer className="mt-5 mb-5">
            <Container className="d-flex flex-wrap justify-content-between">
            <div className="d-flex flex-column">
                <p>GET SPECIAL DISCOUNT IN YOUR INBOX</p>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-success" id="button-addon2">
                    Send
                    </Button>
                </InputGroup>
            </div>
            <div className="d-flex flex-column">
                <p>EXPERIENCE US ON YOUR MOBILE WITH OUR APPS</p>
                <img src="app_icons.png" height="100px" width="360px" alt="apps icons"/>
            </div>
            <div className="d-flex flex-column">
                <p>FOR ANY HELP YOU MAY CALL AT 0000-000-0000</p>
                <p>(Monday to Saturday, 8AM to 10PM)</p>
            </div>
            </Container>
        </footer>
    )
}

export default SubFooter;