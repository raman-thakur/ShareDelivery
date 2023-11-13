import { react, useState, useEffect } from "react";
import axios from "axios";
import Nav from './NavBar'



const Request = () =>{
    const [requests, setrequests] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/requests").then((data)=>{
            const fun = (prop) =>{
                return prop.map((x)=>{
                    return x;
                });
            };
            const arr = fun(Object.values(data.data));
            setrequests(arr);
        });
    },[]);

        

    if(requests.length < 1)
    {
        return(
            <div>
                <div className='sticky-nav'>
                    <Nav/>
                </div>
                <div className='add-request-link'>
                <a href="/addrequest">Add Request</a> 
                </div>
            <div className="Request-list">
            <div className="Request">
                <p className="Site">Flipkart</p>
                <p className="Name">Raman Thakur</p>
                <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
                <p className="Address">pincode</p>
                <p className="Address">800/-</p>
                <p className="Address">deadline</p>
            </div>
            <div className="Request">
                <p className="Site">Flipkart</p>
                <p className="Name">Raman Thakur</p>
                <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
                <p className="Address">pincode</p>
                <p className="Address">800/-</p>
                <p className="Address">deadline</p>
            </div>
            <div className="Request">
                <p className="Site">Flipkart</p>
                <p className="Name">Raman Thakur</p>
                <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
                <p className="Address">pincode</p>
                <p className="Address">800/-</p>
                <p className="Address">deadline</p>
            </div>
            <div className="Request">
                <p className="Site">Flipkart</p>
                <p className="Name">Raman Thakur</p>
                <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
                <p className="Address">pincode</p>
                <p className="Address">800/-</p>
                <p className="Address">deadline</p>
            </div>
            <div className="Request">
                <p className="Site">Flipkart</p>
                <p className="Name">Raman Thakur</p>
                <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
                <p className="Address">pincode</p>
                <p className="Address">800/-</p>
                <p className="Address">deadline</p>
            </div>
            <div className="Request">
                <p className="Site">Flipkart</p>
                <p className="Name">Raman Thakur</p>
                <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
                <p className="Address">pincode</p>
                <p className="Address">800/-</p>
                <p className="Address">deadline</p>
            </div>
            </div>
            </div>
        );
    }
    else
    {
        let listrequests=[];
        for(var i=0;i<requests.length;i++){
            listrequests.push(
                <div className="Request">
                <p className="Site"><b>{requests[i].website}</b></p>
                <p className="Name">Requested By: {requests[i].requester}</p>
                <p className="Address">Value Required: {requests[i].requiredvalue}/-</p>
                <p className="Address">Contact: {requests[i].contact}</p>
                <p className="Address">Address: {requests[i].address}</p>
                <p className="Address">pincode: {requests[i].pincode}</p>
                <p className="Address">Deadline hour: {requests[i].deadlinehours}</p>
            </div>
            );
        }
        return (
            <div>
                <div className='sticky-nav'>
                    <Nav/>
                </div>
                <div className='add-request-link'>
                <a href="/addrequest">Add Request</a> 
                </div>
            <div className="Request-list">
            {listrequests}
            </div>
            </div>
        )
    }
    
};

export default Request;