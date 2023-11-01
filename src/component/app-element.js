
import React, { Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AppCarouselImage from './app-element-carousel';
import '../style/app-element.css'
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const AppElement = () => {
    const [products, setProducts]  = React.useState([])

    React.useEffect(() => {
        fetch("/api/product")
        .then((resp) => resp.json())
        .then((data) => setProducts(data.products))
    }, [])
  
  
    const productElement = products.map( it => (

        <Col className="p-0 m-2 shadow bg-white rounded" xs={12} sm={6} md={3} lg={2} xl={2} xxl={2} key={it.id} >
            <Card>
                {/* <Card.Img > */}
                    <Carousel fade variant="top">
                        <Carousel.Item>
                            <AppCarouselImage text={it.name} id={it.id} imageUrl={it.imageUrl[0]} />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <AppCarouselImage text={it.name} id={it.id} imageUrl={it.imageUrl[1]} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <AppCarouselImage text={it.name} id={it.id} imageUrl={it.imageUrl[2]} />
                        </Carousel.Item>
                    </Carousel>
                {/* </Card.Img> */}
                <Card.Body className='p-2 tile-item'>
                <Link to={`/products/${it.id}`}>
                
                <Card.Title>
                    <Row>
                        <Col xs={4} sm={4} md={4} lg={4} className='drop-shadow'>
                            <Card.Img variant="top" className='w-75 h-75' src={it.avatarUrl} />
                        </Col>
                        <Col xs={8} sm={8}  md={8} lg={8}> 
                            <Row>
                                <div className="col-xs-6 fw-light apply-hover">{it.name}</div>
                                <div className="col-xs-6 fw-lighter text-truncate text-decoration-none">{it.shortDesc}</div>
                            </Row>  
                        </Col>
                    </Row>
                
                </Card.Title>
                </Link>
                </Card.Body>
            </Card>
            </Col>

        

    ))

    return (
    <Fragment>
        <div className='element-list-container'>
            <Container fluid className='m-4'>
                    {
                    products.length !== 0 &&(
                        <Row>
                            {productElement}
                            </Row>
                    ) || products.length === 0 && (<h2>Loading...</h2>)}
            </Container>
        </div>
    </Fragment>
  );
}

export default AppElement


// import { Col, Row, Container } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css'

// function AppElement() {
//   return (
//     <Container fluid="lg">
//         <Row>
//         {Array.from({ length: 10 }).map((_, idx) => (
//             <Col className="mt-2 md-2" xs={12} sm={6} md={3} lg={2} xl={2} xxl={2} key={idx} >
//             <Card>
//                 <Card.Img variant="top" src="holder.js/100px160" />
//                 <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                     This is a longer card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//             </Col>
//         ))}
//         </Row>
//     </Container>
//   );
// }

// export default AppElement;