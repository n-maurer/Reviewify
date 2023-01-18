import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReviewModal(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [review, setReview] = useState([]);

  async function search() {
        fetch(`http://localhost:8000/api/reviews/${props.review_id}`)
            .then((response) => response.json())
            .then((data) => {
                setReview(data);
            });
    }


  return (
    <>
      <Modal
        key={props.review_id}
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="modal fade bd-example-modal-lg"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" >
                Review Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={review.img_url} />
            <div>{review.title}</div>
            <p>{review.content}</p>
            <div>{review.best_song}</div>
            <div>{review.worst_song}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ReviewModal;
