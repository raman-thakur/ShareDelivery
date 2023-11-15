import { react, useState, useEffect } from "react";
import axios from "axios";
import Nav from './NavBar'




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

    const distancechanger = () =>{
        setdistance(document.getElementById("distancefilter").value);
    }

    
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
    },[]);
    
    const distanceCalculator=(lat1, lon1, lat2, lon2) => {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344
            
            return dist;
        }
    }

    useEffect(() => {
        let listrequests=[];
        for(var i=0;i<requests.length;i++){
            // setdistance(12);
            // console.log(distance);
            let locationarray=requests[i].location.split(',');
            let lat1=locationarray[0];
            let log1=locationarray[1];
            // locationarray=requests[i].location.split(',');
            let lat2=currLocation.latitude
            let log2=currLocation.longitude
            let calculateddistance=distanceCalculator(lat1,log1,lat2,log2);
            console.log(calculateddistance)
            if(calculateddistance<=distance)
            {
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
                <div className="requestandfilter">
                    <div className='add-request-link'>
                    <a href="/addrequest">Add Request</a> 
                    </div>
                    <select id="distancefilter" name="distance">
                    <option value="1">100m</option>
                    <option value="2">300m</option>
                    <option value="4">600m</option>
                    <option value="5">1.0 km</option>
                    <option value="4">1.5 km</option>
                    <option value="4">2.0 km</option>
                    <option value="4">3.0 km</option>
                    <option value="4">5.0 km</option>
                    </select>
                    <p>ifjwwd</p>
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
                <div className="requestandfilter">
                    <div className='add-request-link'>
                    <a href="/addrequest">Add Request</a> 
                    </div>
                    <div className="filter">
                    <p>Filter by Distance&nbsp;&nbsp;</p>
                    <select id="distancefilter" onChange={distancechanger} name="distance">
                    <option value="0.1">100m</option>
                    <option value="0.3">300m</option>
                    <option value="0.6">600m</option>
                    <option value="1.0">1.0 km</option>
                    <option value="1.5">1.5 km</option>
                    <option value="2.0">2.0 km</option>
                    <option value="3.0">3.0 km</option>
                    <option value="5.0">5.0 km</option>
                    </select>
                    </div>
                </div>
            <div className="Request-list">
            {filterrequest}
            </div>
            </div>
        )
    }
    
};

export default Request;