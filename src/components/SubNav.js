import { Nav } from 'react-bootstrap';

const SubNav = () => {
    return(
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="text-secondary" href="/home">Make up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-1">Skin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-2">Hair</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-3">Appliances</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-4">Personal Care</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-5">Natural</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-6">Mom & Baby</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-7">Health</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-8">Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-9">Fragrance</Nav.Link>
        </Nav.Item>
      </Nav>
    )

}

export default SubNav;