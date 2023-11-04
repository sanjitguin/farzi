import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import '../style/search-ui-element.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appSearchAction } from "../store/search-slice";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Chip from "./chip";


export function SearchUIElement() {

    const [allAppData, setAllAppData] = useState([])
    const dispatch = useDispatch();

    React.useEffect(() => {
        fetch("/api/product")
            .then(res => res.json())
            .then(d => {
                setAllAppData(d.products)
                
            })
    }, [])

    function closeAppSearchModal() {
        dispatch(appSearchAction.toggleSearchModal(false))
    }


    const customCard = (item) => {
            return (
                <Tooltip id="button-appScrUIEle-2">
                    <div>
                        {
                            item.imageUrl.map((it, index) => {

                                return (
                                        <img key={`appScrUIEle${index}`} src={require(`../asset/images/carousel/prod-${item.id}-${index+1}.png`)} className="h-75 w-75"/>
                                )
                            })
                        }
                    </div>
                    {item.shortDesc}
                </Tooltip>
            )
    }

    return (
            <ListGroup as="ol" >
              
              {
                allAppData.map((item) => {

                    return (
                        <Link key={`srch-ui-elements${item.id}`} to={`/products/${item.id}`} onClick={() => closeAppSearchModal()} style={{textDecoration: "none"}}>
                            <OverlayTrigger  placement="right" overlay={
                                customCard(item)
                                // <Tooltip id="button-appScrEleA-2">
                                //     <div>
                                //         <Chip leftIcon="1" text={item.shortDesc}></Chip>
                                //     </div>
                                //     {item.shortDesc}
                                // </Tooltip>
                            }>
                            {({ ref, ...triggerHandler }) => (
                            <ListGroup.Item id="srch-ui-element" as="li"  className="d-flex justify-content-between align-items-start item" 
                                    variant="light"
                                    {...triggerHandler}
                                    ref={ref}
                                >
                                <div className="ms-2 me-auto" >
                                <div className="fw-bold ">{item.name}</div>
                                    {item.desc}
                                </div>
                                <Badge bg="primary" pill>
                                    {item.badgeCount}
                                </Badge>
                            </ListGroup.Item>
                            )}
                            </OverlayTrigger>
                        </Link>
                    )
                })
              }
              
              
              
              {/* <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item> */}
            </ListGroup>
          
    )
}