import React, { useState } from "react";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import '../style/search-trending.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appSearchAction } from "../store/search-slice";
import Chip  from './chip'

const borderColor = ["#FF008C","#D309E1","#9C1AFF","#7700FF","#4400FF"]

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
                let dataA =[]
                {[...Array(4)].map((x, i) => {
                        dataA.push(d.products[i])
                    }
                )}
                setAppScreenElementAData(dataA)

                //let randomIndex = Math.floor(Math.random() * d.products.length);
                let dataB =[]
                {[...Array(3)].map((x, i) =>
                    dataB.push(d.products[i])
                )}
                setAppScreenElementBData(dataB)
            })
    }, [])

    
    function closeAppSearchModal() {
        dispatch(appSearchAction.toggleSearchModal(false))
    }

    const appAppElements = allAppData.map ( (it, index) => {
        return (
                <Col key={`appAppElements${it.id}`}>
                    <Link to={`/products/${it.id}`} onClick={() => closeAppSearchModal()}>
                    <OverlayTrigger  placement="bottom" overlay={<Tooltip id="button-avatar-2">{it.shortDesc}</Tooltip>}>
                    {({ ref, ...triggerHandler }) => (
                        
                        
                         
                        <img ref={ref} {...triggerHandler} variant="top" className='w-75 h-75 zoom icon-placeholder' src={it.avatarUrl} 
                        style={{border: `1px solid ${borderColor[index%5]}`}}
                        />
                    )}
                    </OverlayTrigger>    
                    </Link>
                </Col>

        )
    })

    const appScreenElementRowA = appScreenElementAData.map ( it =>  {
        return (
                <Col key={`appScreenElementRowA${it.id}`} xs={12} sm={3} className="small-block">
                    <Link to={`/products/${it.id}`} onClick={() => closeAppSearchModal()}>
                    <OverlayTrigger  placement="bottom" overlay={<Tooltip id="button-appScrEleA-2">{it.shortDesc}</Tooltip>}>
                    {({ ref, ...triggerHandler }) => (
                        <div variant="light"
                        {...triggerHandler}
                         >
                    {
                        it.imageUrl.map((item, index) => {
                            const dLeft = index*20 + 2;
                            const dHeight = 60+(index*10);
                            return ( 
                                <img ref={ref} key={`${item.id}-${index}`} variant="top" className='sub_div zoom' 
                                    src={require(`../asset/images/carousel/prod-${it.id}-${index+1}.png`)} style={{bottom: `2px`, left: `${dLeft}px`, width: "50%", height: `${dHeight}%`}} />
                                
                             )
                        })}
                        </div>
                    )}
                        </OverlayTrigger>
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "#FF008C", height: "1px" }} />
                    
                        <p style={{ margin: "0 10px", color:"#6F38C5" }}>App</p>
                    
                        <div style={{ flex: 1, backgroundColor: "#FF008C", height: "1px" }} />
                    </div>
                        
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 1, backgroundColor: "#9C1AFF", height: "1px" }} />
                        
                            <p style={{ margin: "0 10px", color: "#D309E1"}}>Screen</p>
                        
                            <div style={{ flex: 1, backgroundColor: "#9C1AFF", height: "1px" }} />
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid style={{backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgb(220, 229, 239))"}}>
                            <Row>
                                {appScreenElementRowA}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "1px" }} />
                            
                                <p style={{ margin: "0 10px", color:"#FF008C" }}>UI Element</p>
                            
                                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "1px" }} />
                            </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="flex">
                        {
                            appScreenElementAData.map((item) => (
                                <Link key={`ui-elements${item.id}`} to={`/products/${item.id}`} onClick={() => closeAppSearchModal()} style={{textDecoration: "none"}}>
                                <Chip 
                                    leftIcon="1"
                                    text={item.shortDesc}
                                    
                                />
                                </Link>
                            ))
                        }
                        
                    </div>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}