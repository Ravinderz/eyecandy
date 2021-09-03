import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const MainNav = () => {
    return(
<Container>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#" className="pl-3">
  <img
        src="/logo.png"
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="Eye Candy"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-evenly">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link className="text-dark" href="#action1">CATEGORIES</Nav.Link>
      <Nav.Link className="text-dark" href="#action2">BRANDS</Nav.Link>
      <Nav.Link className="text-dark" href="#action3">FASHION</Nav.Link>
      <Nav.Link className="text-dark" href="#action4">BEAUTY ADVICE</Nav.Link>
      <Nav.Link className="text-dark" href="#action5">NETWORK</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</Container>
        
    )

}

export default MainNav;