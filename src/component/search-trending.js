import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../style/search-trending.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appSearchAction } from "../store/search-slice";


export default function SearchTrending() {
    const [allAppData, setAllAppData] = useState([])
    const [appScreenElementAData, setAppScreenElementAData] = useState([])
    const [appScreenElementBData, setAppScreenElementBData] = useState([])
    const dispatch = useDispatch();

    React.useEffect(() => {
        fetch("/api/product")
            .then(res => res.json())
            .then(d => {
                
                setAllAppData(d.products)
                let randomIndex = Math.floor(Math.random() * d.products.length);
                let dataA =[]
                {[...Array(4)].map((x, i) => {
                        dataA.push(d.products[i])
                    }
                )}
                setAppScreenElementAData(dataA)

                randomIndex = Math.floor(Math.random() * d.products.length);
                let dataB =[]
                {[...Array(3)].map((x, i) =>
                    dataB.push(d.products[i])
                )}
                setAppScreenElementBData(dataB)
            })
    }, [])


    function closeAppSearchModal() {
        dispatch(appSearchAction.closeSearchModal())
    }
    const appAppElements = allAppData.map ( it => {
        return (
                <Col key={`appAppElements${it.id}`}>
                    <Link to={`/products/${it.id}`} onClick={() => closeAppSearchModal()}>
                        <img variant="top" className='w-75 h-75 zoom' src={it.avatarUrl} />
                    </Link>
                </Col>

        )
    })

    const appScreenElementRowA = appScreenElementAData.map ( it =>  {
        return (
                <Col key={`appScreenElementRowA${it.id}`} xs={12} sm={3}>
                    <Link to={`/products/${it.id}`} onClick={() => closeAppSearchModal()}>
                        <div className="small-block" >
                    {
                        it.imageUrl.map((item, index) => {
                            const dLeft = index*20 + 2;
                            const dHeight = 60+(index*10);
                            return ( 
                                <img key={`${item.id}-${index}`} variant="top" className='sub_div zoom' 
                                    src={require(`../asset/images/carousel/prod-${it.id}-${index+1}.png`)} style={{bottom: `2px`, left: `${dLeft}px`, width: "50%", height: `${dHeight}%`}} />
                                
                             )
                        })}
                        </div>
                    </Link>
                </Col>

        )
    })

    const appScreenElementRowB = appScreenElementBData.map ( it => {
        return (
                <Col key={`appScreenElementRowB${it.id}`}>
                    <img variant="top" className='w-75 h-75' src={it.avatarUrl} />
                </Col>

        )
    })


    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        App
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid>
                            <Row>
                                {appAppElements}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Screen
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid>
                            <Row>
                                {appScreenElementRowA}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        UI Element
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* <div class="gallery">
                        <div class="box" tabindex="1" autofocus>
                            <img className='w-25 h-25' src={require(`../asset/images/carousel/prod-1-1.png`)} />	
                        </div>
                        <div class="box" tabindex="2">
                            <img className='w-25 h-25' src={require(`../asset/images/carousel/prod-1-2.png`)} />	
                        </div>
                        <div class="box" tabindex="3">
                            <img className='w-25 h-25' src={require(`../asset/images/carousel/prod-2-1.png`)} />	
                        </div>
                        <div class="box" tabindex="4">
                            <img className='w-25 h-25' src={require(`../asset/images/carousel/prod-3-1.png`)} />	
                        </div>
                        <div class="box" tabindex="5">
                            <img className='w-25 h-25' src={require(`../asset/images/carousel/prod-4-1.png`)} />	
                        </div>
                        <div class="box" tabindex="6">
                            <img className='w-25 h-25' src={require(`../asset/images/carousel/prod-5-1.png`)}/>	
                        </div>
                    </div> */}
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}