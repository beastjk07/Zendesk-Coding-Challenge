import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ticket Overview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-md-7">
               <h6 className = "font-weight-bold">Subject</h6> <p>{props.ticket.subject ? props.ticket.subject : "Not Mentioned"}</p>
            </div>
            <div className="offset-1 col-md-4">
               <h6 className = "font-weight-bold">Date Assigned</h6> <p >{new Intl.DateTimeFormat("en-GB").format(new Date(props.ticket.created_at)) ? new Intl.DateTimeFormat("en-GB").format(new Date(props.ticket.created_at)) : "Not Mentioned"}</p>
            </div>
        </div>
        <h6 className = "font-weight-bold">Description</h6>
        <p>
          {props.ticket.description ? props.ticket.description : "Not Mentioned"}
        </p>
        <hr />
        <div className="row">
            <h6 className = "font-weight-bold">Tags</h6>

            {
                props.ticket.tags.map(x => {
                    return <span className="col-md-4">
                        <button type="button" class="btn btn-success btn-sm">{x}</button>
                    </span> 
                    
                })  
            }
        </div>
        <div className = "row">
            <div className="col-md-4">
                <h6 className = "font-weight-bold">Priority</h6>
                <p>{props.ticket.priority ? props.ticket.priority: "Not mentioned" }</p>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

