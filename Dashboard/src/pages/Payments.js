import React from "react";
import '../index.css';
import amazonpay from '../assets/Amazon_Pay-Logo.wine.svg';
import paypal from '../assets/PayPal-Logo.wine.svg';
import applepay from '../assets/Apple_Pay-Logo.wine.svg';
import master from '../assets/mastercard-2.svg';
import { Card } from "react-bootstrap";

function Payments() {
    const data = [
        {
            id:0,
            status: "Cancelled",
            amount: "$35440",
            date: "28 April 2019",
            description: "Payment via Mastercard"
        },
        {
            id:1,
            status: "Proceed",
            amount: "$52840",
            date: "29 April 2019",
            description: "Payment via Mastercard"
        },
        {
            id:2,
            status: "On hold",
            amount: "$19026",
            date: "28 April 2019",
            description: "Payment via Paypal"
        },
        {
            id:3,
            status: "Cancelled",
            amount: "$65454",
            date: "26 April 2019",
            description: "Payment via Mastercard"
        },
        {
            id:4,
            status: "Proceed",
            amount: "$33110",
            date: "25 April 2019",
            description: "Payment via Paypal"
        },
         {
             id:5,
            status: "Onhold",
            amount: "$7133",
            date: "25 April 2019",
            description: "Payment via Mastercard"
        },
        {
            id:6,
            status: "Cancelled",
            amount: "$700.005",
            date: "24 April 2019",
            description: "Payment via Paypal"
        }]
    
    return (
        <Card style={{height:'80vh'}}>
            <Card.Header className="text-left ">
               <h5>Payments history</h5> 
            </Card.Header>
            <Card.Body>
            <div className=" mb-4" style={{ backgroundColor: "#f1f4f7" }}>
                <div className="d-flex py-2 justify-content-between">
                    <h6 className="text-muted">Make a payment</h6>
                    <a href="#" className="ms-auto text-right" >Show other payment methods</a>
                </div>
                <div className="row mb-0">
                    <div className="col-6 col-md-3">
                        <img
                            className="rounded-3 logo-size img-fluid bg-white mb-4"
                            alt="paypal_image"
                            src={paypal} />
                    </div>
                    <div className="col-6 col-md-3">
                        <img
                            className="rounded-3 logo-size img-fluid bg-white mb-4 p-2"
                            alt="mastercard_image"
                            src={master}
                        />
                    </div>
                    <div className="col-6 col-md-3">
                        <img
                            className="rounded-3 logo-size img-fluid bg-white mb-4 p-2"
                            alt="amazonpay_image"
                            src={amazonpay}
                        />
                    </div>
                    <div className="col-6 col-md-3">
                        <img
                            className="rounded-3 logo-size img-fluid bg-white mb-4 p-2"
                            alt="applepay_image"
                            src={applepay}
                        />
                    </div>
                </div>
            </div>
            <table className="table responsive" style={{overflow:'scroll'}}>
                <thead >
                    <tr style={{ backgroundColor: "#E3E9EF", color: "#B3B8BD" }}>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((list)=>
                        <tr >
                        <td>{list.status}</td>
                        <td>{list.amount}</td>
                        <td>{list.date}</td>
                        <td>{list.description}</td>
                        <td><button type="button" class="btn btn-outline-primary">Details</button></td>
                    </tr>
                    )}
                       </tbody>
            </table>
            </Card.Body>
        </Card >)
}
export default Payments;