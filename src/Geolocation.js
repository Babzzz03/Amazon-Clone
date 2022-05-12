import React from 'react';
import axios from "axios";
import "./Geolocation.css"
const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `ecb11d9ad123c064b980ea5cdb0c608b`;


function Geolocation() {
    const [latitude, setLatitude] = React.useState('')
    const [longitude, setLongitude] = React.useState('');
    const [responseData, setresponseData] = React.useState({})
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
setLatitude(position.coords.latitude);
setLongitude(position.coords.longitude);

        })
        let finalApiEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`

        axios.get(
          finalApiEndPoint)
          .then((response) => {
              console.log(responseData)
setresponseData(response.data);
          }
        );
    }, [latitude, longitude])




  return (
    <div className="geolocation">
      <div className="geolocation__content">
        We deliver to your Country{" "}
        <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
        {responseData?.sys?.country}, in <span className='city'> {responseData?.name} </span>
      </div>
    </div>
  );
}

export default Geolocation