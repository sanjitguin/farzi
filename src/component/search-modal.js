import { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SearchTab from './search-tab';
import { useDispatch, useSelector } from 'react-redux';
import { appSearchAction } from '../store/search-slice';



function SearchModal() {
  
    
    const ref = useRef()
    const dispatch  = useDispatch()
    const openSearchModal = useSelector(state => state.appSearch.openSearchModal)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(appSearchAction.toggleSearchModal(false))
        }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
        document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
        document.body.style.overflow = "auto"
        }
    }, [])

  return (openSearchModal) ? (
    <>
      <Modal
        show={openSearchModal}
        onHide={() => 
          dispatch(appSearchAction.toggleSearchModal(false))
        }
        // dialogClassName="modal-90w"
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
            <SearchTab />
        </Modal.Body>
      </Modal>
    </>) :""
  ;
}

export default SearchModal;