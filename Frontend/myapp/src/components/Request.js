import { react, useState, useEffect } from "react";
import axios from "axios";
import Nav from './NavBar'

function calcCrow(lat1, lon1, lat2, lon2) 
  {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
  }

    // Converts numeric degrees to radians
  function toRad(Value) 
  {
     return Value * Math.PI / 180;
  }


const Request = () =>{
    const [requests, setrequests] = useState([]);
    const [currLocation, setCurrLocation] = useState({});
    const [distance, setdistance] = useState(10);
    const [filterrequest, setfilterrequest] = useState([]);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
        //   console.log(position);
          const { latitude, longitude } = position.coords;
          setCurrLocation({ latitude, longitude });
        });
      };
    useEffect(() => {
        axios.get("http://localhost:8000/requests").then((data)=>{
            console.log(data.data);
            const arr=[];
            data.data.map((x)=>{
                arr.push(x);
            });
            setrequests(arr);
        });
    },[]);

    useEffect(() => {
        getLocation();
        setdistance(14);
    },[]);
    

    useEffect(() => {
        let listrequests=[];
        for(var i=0;i<requests.length;i++){
            // setdistance(12);
            console.log(distance);
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
        setfilterrequest(listrequests);
    },[requests, distance]);

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
        // let listrequests=[];
        // for(var i=0;i<requests.length;i++){
        //     // setdistance(12);
        //     console.log(distance);
        //     listrequests.push(
        //         <div className="Request">
        //         <p className="Site"><b>{requests[i].website}</b></p>
        //         <p className="Name">Requested By: {requests[i].requester}</p>
        //         <p className="Address">Value Required: {requests[i].requiredvalue}/-</p>
        //         <p className="Address">Contact: {requests[i].contact}</p>
        //         <p className="Address">Address: {requests[i].address}</p>
        //         <p className="Address">pincode: {requests[i].pincode}</p>
        //         <p className="Address">Deadline hour: {requests[i].deadlinehours}</p>
        //     </div>
        //     );
        // }
        return (
            <div>
                <div className='sticky-nav'>
                    <Nav/>
                </div>
                <div className='add-request-link'>
                <a href="/addrequest">Add Request</a> 
                </div>
            <div className="Request-list">
            {filterrequest}
            </div>
            </div>
        )
    }
    
};

export default Request;