import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import { GrayBox } from './Components/LightGrayBox';
import { dataforlogo } from './Components/logo';
import { timeconvert } from './Components/UnixTime';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
   <div>
    <Gettinglocation/>
   </div>
  )
}

function err(e){
  console.log("Got an err:",e)
}
function Gettinglocation(){
  const [coordinate, setCoordinate] = useState({
    latitude:null,
    longitude: null
  });
  const [dataweather,setData]=useState([
    {
        "app_max_temp": 42.1,
        "app_min_temp": 28.2,
        "clouds": 0,
        "clouds_hi": 0,
        "clouds_low": 1,
        "clouds_mid": 6,
        "datetime": "2024-06-01",
        "dewpt": 17.3,
        "high_temp": 39.9,
        "low_temp": 27.8,
        "max_dhi": null,
        "max_temp": 39.9,
        "min_temp": 26.7,
        "moon_phase": 0.210091,
        "moon_phase_lunation": 0.85,
        "moonrise_ts": 1717188556,
        "moonset_ts": 1717234304,
        "ozone": 286.7,
        "pop": 0,
        "precip": 0,
        "pres": 941.5,
        "rh": 41,
        "slp": 1003.3,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717200897,
        "sunset_ts": 1717249283,
        "temp": 33.7,
        "ts": 1717182060,
        "uv": 0,
        "valid_date": "2024-06-01",
        "vis": 24,
        "weather": {
            "description": "Clear Sky",
            "code": 800,
            "icon": "c01d"
        },
        "wind_cdir": "W",
        "wind_cdir_full": "west",
        "wind_dir": 271,
        "wind_gust_spd": 9.5,
        "wind_spd": 4.1
    },
    {
        "app_max_temp": 39.6,
        "app_min_temp": 28.9,
        "clouds": 0,
        "clouds_hi": 0,
        "clouds_low": 3,
        "clouds_mid": 34,
        "datetime": "2024-06-02",
        "dewpt": 17.2,
        "high_temp": 38.6,
        "low_temp": 29,
        "max_dhi": null,
        "max_temp": 38.6,
        "min_temp": 27.8,
        "moon_phase": 0.120679,
        "moon_phase_lunation": 0.88,
        "moonrise_ts": 1717277185,
        "moonset_ts": 1717324418,
        "ozone": 282.5,
        "pop": 0,
        "precip": 0,
        "pres": 942,
        "rh": 40,
        "slp": 1004.3,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717287291,
        "sunset_ts": 1717335708,
        "temp": 33.4,
        "ts": 1717268460,
        "uv": 11.7,
        "valid_date": "2024-06-02",
        "vis": 24,
        "weather": {
            "description": "Clear Sky",
            "code": 800,
            "icon": "c01d"
        },
        "wind_cdir": "WNW",
        "wind_cdir_full": "west-northwest",
        "wind_dir": 283,
        "wind_gust_spd": 6.5,
        "wind_spd": 2.5
    },
    {
        "app_max_temp": 40.5,
        "app_min_temp": 29.3,
        "clouds": 0,
        "clouds_hi": 0,
        "clouds_low": 0,
        "clouds_mid": 17,
        "datetime": "2024-06-03",
        "dewpt": 16.7,
        "high_temp": 39.3,
        "low_temp": 29.3,
        "max_dhi": null,
        "max_temp": 39.3,
        "min_temp": 29,
        "moon_phase": 0.0539512,
        "moon_phase_lunation": 0.91,
        "moonrise_ts": 1717365979,
        "moonset_ts": 1717414655,
        "ozone": 283.3,
        "pop": 20,
        "precip": 0.015625,
        "pres": 941.8,
        "rh": 36,
        "slp": 1003.8,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717373686,
        "sunset_ts": 1717422132,
        "temp": 34.2,
        "ts": 1717354860,
        "uv": 11.6,
        "valid_date": "2024-06-03",
        "vis": 23.871,
        "weather": {
            "description": "Clear Sky",
            "code": 800,
            "icon": "c01d"
        },
        "wind_cdir": "WNW",
        "wind_cdir_full": "west-northwest",
        "wind_dir": 283,
        "wind_gust_spd": 7,
        "wind_spd": 2.7
    },
    {
        "app_max_temp": 41.9,
        "app_min_temp": 30.1,
        "clouds": 2,
        "clouds_hi": 0,
        "clouds_low": 4,
        "clouds_mid": 24,
        "datetime": "2024-06-04",
        "dewpt": 18.4,
        "high_temp": 39.2,
        "low_temp": 28.5,
        "max_dhi": null,
        "max_temp": 39.2,
        "min_temp": 29.3,
        "moon_phase": 0.0137571,
        "moon_phase_lunation": 0.95,
        "moonrise_ts": 1717455029,
        "moonset_ts": 1717504989,
        "ozone": 285.6,
        "pop": 0,
        "precip": 0,
        "pres": 942,
        "rh": 40,
        "slp": 1004.2,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717460082,
        "sunset_ts": 1717508556,
        "temp": 34.2,
        "ts": 1717441260,
        "uv": 11.6,
        "valid_date": "2024-06-04",
        "vis": 24,
        "weather": {
            "description": "Few clouds",
            "code": 801,
            "icon": "c02d"
        },
        "wind_cdir": "W",
        "wind_cdir_full": "west",
        "wind_dir": 278,
        "wind_gust_spd": 7.4,
        "wind_spd": 2.8
    },
    {
        "app_max_temp": 40.9,
        "app_min_temp": 28.3,
        "clouds": 6,
        "clouds_hi": 0,
        "clouds_low": 3,
        "clouds_mid": 21,
        "datetime": "2024-06-05",
        "dewpt": 17.3,
        "high_temp": 38.8,
        "low_temp": 28.8,
        "max_dhi": null,
        "max_temp": 38.8,
        "min_temp": 28.5,
        "moon_phase": 0.00161642,
        "moon_phase_lunation": 0.98,
        "moonrise_ts": 1717544401,
        "moonset_ts": 1717595311,
        "ozone": 283.5,
        "pop": 0,
        "precip": 0,
        "pres": 942.4,
        "rh": 38,
        "slp": 1004.6,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717546479,
        "sunset_ts": 1717594979,
        "temp": 33.7,
        "ts": 1717527660,
        "uv": 11.6,
        "valid_date": "2024-06-05",
        "vis": 24,
        "weather": {
            "description": "Few clouds",
            "code": 801,
            "icon": "c02d"
        },
        "wind_cdir": "W",
        "wind_cdir_full": "west",
        "wind_dir": 279,
        "wind_gust_spd": 7.1,
        "wind_spd": 2.7
    },
    {
        "app_max_temp": 39.2,
        "app_min_temp": 28.1,
        "clouds": 16,
        "clouds_hi": 0,
        "clouds_low": 1,
        "clouds_mid": 16,
        "datetime": "2024-06-06",
        "dewpt": 14.1,
        "high_temp": 39.8,
        "low_temp": 27.5,
        "max_dhi": null,
        "max_temp": 39.8,
        "min_temp": 28.8,
        "moon_phase": 0.0166142,
        "moon_phase_lunation": 0.02,
        "moonrise_ts": 1717630801,
        "moonset_ts": 1717685452,
        "ozone": 279.1,
        "pop": 0,
        "precip": 0,
        "pres": 943.1,
        "rh": 33,
        "slp": 1005.1,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717632877,
        "sunset_ts": 1717681402,
        "temp": 32.9,
        "ts": 1717614060,
        "uv": 11.8,
        "valid_date": "2024-06-06",
        "vis": 24,
        "weather": {
            "description": "Few clouds",
            "code": 801,
            "icon": "c02d"
        },
        "wind_cdir": "WNW",
        "wind_cdir_full": "west-northwest",
        "wind_dir": 292,
        "wind_gust_spd": 7.1,
        "wind_spd": 3.3
    },
    {
        "app_max_temp": 41.3,
        "app_min_temp": 29.3,
        "clouds": 24,
        "clouds_hi": 13,
        "clouds_low": 1,
        "clouds_mid": 24,
        "datetime": "2024-06-07",
        "dewpt": 16.8,
        "high_temp": 41.1,
        "low_temp": 27.7,
        "max_dhi": null,
        "max_temp": 41.1,
        "min_temp": 27.5,
        "moon_phase": 0.0557823,
        "moon_phase_lunation": 0.05,
        "moonrise_ts": 1717720495,
        "moonset_ts": 1717775255,
        "ozone": 272.7,
        "pop": 20,
        "precip": 0.0625,
        "pres": 942.1,
        "rh": 38,
        "slp": 1002.8,
        "snow": 0,
        "snow_depth": 0,
        "sunrise_ts": 1717719277,
        "sunset_ts": 1717767824,
        "temp": 34.4,
        "ts": 1717700460,
        "uv": 11.8,
        "valid_date": "2024-06-07",
        "vis": 24,
        "weather": {
            "description": "Scattered clouds",
            "code": 802,
            "icon": "c02d"
        },
        "wind_cdir": "WNW",
        "wind_cdir_full": "west-northwest",
        "wind_dir": 282,
        "wind_gust_spd": 9.2,
        "wind_spd": 7.2
    }
])
  const [cityname,setcity]=useState("")
  useEffect(()=>{
    const location=navigator.geolocation.getCurrentPosition((position)=>{ setCoordinate({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });},err); 
  },[])
  useEffect(()=>{
    async function dummyfn(){
    let lat=coordinate.latitude;
    let lon=coordinate.longitude;
    const API_KEY="606a48c975724a409cd67754739f59d1"
  const api_2="5o3Zc2LcPLNLFFbkh9ctWQ==I7FKNpKUnjeaRxtu"
    if(lat){
      try{
    const rescity=axios.get('https://api.api-ninjas.com/v1/reversegeocoding?lat=' + lat + '&lon=' + lon,{
      headers:{
        'X-Api-Key': api_2
      }
  })
  
  setcity(((await rescity).data[0]).name)
        const res=await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily`,{
      params:{
        lat:lat,
        lon:lon,
        key:API_KEY,
      }
    })
    setData(((res.data).data))
      }
      catch(e){
        console.log("Got error while fetching the data: ",e)
      }
    }
    }
    dummyfn();
  },[coordinate.latitude])
  function logogetter(n){
  const newdata=dataforlogo;
  const reccode=(dataweather[n].weather).code;
  const recicon=(dataweather[n].weather).icon;
  let url=null;
  newdata.forEach(item=>{
    if(item.code===reccode){
      url=(item.icon)[0].url
      if((item.icon)[1].code===recicon){
        url=(item.icon)[1].url
      }
    }
  });
  return url;
  }

  // if (!dataweather) {
  //   return <div>Loading...</div>;
  // }

  return <div className="flex justify-center bg-blue-759 bg-cover bg-center h-screen">
    <Analytics/>
    <div>{/*parent div to make header and content page in column wise fashion */}
     <div>{/*header of the page */}
      <div className='flex justify-between'>  
      <div className='m-2.5 text-3xl font-bold text-white'> {/*city name */}
      {cityname}
      <div className='m-1 text-gray-500 text-sm'>
        Chance of rain: {dataweather[0].pop} 
      <div className='text-4xl font-bold m-2 text-white'> {/*temperature */}
      {dataweather[0].temp}
      </div>
      </div>
      </div>
      <div className='w-15'> {/*logo */}
      <img src={logogetter(0)} alt='logo for weather'/>
      </div>
      </div>
      </div>
      <GrayBox data={dataweather}/>
      <div>{/*light gray box with info */}
    <div className='m-4 w-[850px] bg-gray-101 py-2 rounded-md'>
    <div className='mx-2 text-white font-semibold'>Air Condition</div>
    <div className='text-white mx-2'>
      <div className='grid grid-cols-[45%_30%_25%] gap-4 m-4'>
      <div>
        <div className='flex'>
      <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-2' height="28" viewBox="0 0 32 32" width="28"><path d="m26 30h-4a2.0059 2.0059 0 0 1 -2-2v-7a2.0059 2.0059 0 0 1 -2-2v-6a2.9465 2.9465 0 0 1 3-3h6a2.9465 2.9465 0 0 1 3 3v6a2.0059 2.0059 0 0 1 -2 2v7a2.0059 2.0059 0 0 1 -2 2zm-5-18a.9448.9448 0 0 0 -1 1v6h2v9h4v-9h2v-6a.9448.9448 0 0 0 -1-1z"/><path d="m24 9a4 4 0 1 1 4-4 4.0118 4.0118 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2.0059 2.0059 0 0 0 -2-2z"/><path d="m10 20.1839v-8.1839h-2v8.1839a3 3 0 1 0 2 0z"/><path d="m9 30a6.9931 6.9931 0 0 1 -5-11.8892v-11.1108a5 5 0 0 1 10 0v11.1108a6.9931 6.9931 0 0 1 -5 11.8892zm0-26a3.0033 3.0033 0 0 0 -3 3v11.9834l-.332.2983a5 5 0 1 0 6.664 0l-.332-.2983v-11.9834a3.0033 3.0033 0 0 0 -3-3z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>
      Feel like (max)
        </div>
        <div className='flex justify-between mx-16 my-5'>
        {dataweather[0].app_max_temp}
        </div>
      </div>
      <div>
        <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className='mx-2' height="40" width="40" enable-background="new 0 0 30 30" viewBox="0 0 30 30"><path d="m3.1 16.97c0 .24.09.45.28.62.16.19.37.28.63.28h14.69c.29 0 .53.1.73.3s.3.45.3.74-.1.53-.3.72-.44.29-.74.29c-.29 0-.54-.1-.73-.29-.16-.18-.36-.26-.6-.26-.25 0-.46.09-.64.26s-.27.38-.27.61c0 .25.09.46.28.63.56.55 1.22.83 1.96.83.78 0 1.45-.27 2.01-.81s.83-1.19.83-1.97-.28-1.44-.84-2-1.23-.84-2-.84h-14.68c-.25 0-.46.09-.64.26s-.27.38-.27.63zm0-3.28c0 .23.09.43.28.61.17.18.38.26.63.26h20.04c.78 0 1.45-.27 2.01-.82.56-.54.84-1.2.84-1.97s-.28-1.44-.84-1.99-1.23-.83-2.01-.83c-.77 0-1.42.27-1.95.8-.18.16-.27.38-.27.67 0 .26.09.47.26.63s.38.24.63.24c.24 0 .45-.08.63-.24.19-.21.42-.31.7-.31.29 0 .53.1.73.3s.3.44.3.73-.1.53-.3.72-.44.29-.73.29h-20.04c-.25 0-.46.09-.64.26-.18.19-.27.4-.27.65z"/></svg>
        Wind Speed
        </div>
          <div className='flex justify-between mx-16 my-5'>
        {dataweather[0].wind_spd}
        </div>
      </div>
      <div>
        <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-2' enable-background="new 0 0 76.00 76.00" height="56" viewBox="0 0 76 76" width="56"><path d="m49.0833 25.3334c4.3722 0 7.9167 3.5445 7.9167 7.9167s-3.5443 7.9165-7.9489 7.9166l-26.0928.0001c-2.1861-.0001-3.9583-1.7723-3.9583-3.9584 0-1.9383 1.3931-3.5512 3.2328-3.892l-.0661-.8581c0-2.9756 2.3456-5.4036 5.2886-5.536 1.3026-3.6927 4.823-6.339 8.9614-6.339 3.9292 0 7.3012 2.3854 8.747 5.787 1.1556-.6599 2.4936-1.0369 3.9196-1.0369zm-24.2777 22.9583c.5277-1.5834 1.5833-3.1667 2.6388-4.75 1.0556 1.5833 2.1111 3.1666 2.6389 4.75.5278 1.5833.5278 3.1666-.5277 3.9583-1.0556.7917-3.1667.7917-4.2223 0-1.0555-.7917-1.0555-2.375-.5277-3.9583zm10.0277 2.375c.5278-1.5834 1.5834-3.1667 2.6389-4.75 1.0556 1.5833 2.1111 3.1666 2.6389 4.75.5278 1.5833.5278 3.1666-.5278 3.9583-1.0555.7917-3.1666.7917-4.2222 0s-1.0556-2.375-.5278-3.9583zm8.9723-3.9584c.5277-1.5833 1.5833-3.1666 2.6388-4.75 1.0556 1.5834 2.1112 3.1667 2.6389 4.75.5278 1.5834.5278 3.1667-.5277 3.9584-1.0556.7916-3.1667.7916-4.2223 0-1.0555-.7917-1.0555-2.375-.5277-3.9584z" stroke-linejoin="round" stroke-width=".2"/></svg>
        Chance of rain
        </div>
        <div className='flex justify-between mx-16'>
        {dataweather[0].pop}
        </div>
      </div>
      </div>
      <div className='grid grid-cols-[45%_35%_20%] gap-4 m-4'>
      <div>
        <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-2' height="30px" width="30px" enable-background="new 0 0 30 30" viewBox="0 0 30 30"><path d="m3.74 14.5c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11 3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4 1.81 2.2 2.4 3.6.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59-2.2 1.8-3.59 2.39-2.84.89-4.37.89-3-.3-4.39-.89-2.59-1.4-3.6-2.4-1.8-2.2-2.4-3.58-.88-2.84-.88-4.37zm2.48 0c0 2.37.86 4.43 2.59 6.18 1.73 1.73 3.79 2.59 6.2 2.59 1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2 1.19-2.81 1.19-4.39-.4-3.05-1.19-4.4-1.86-2.42-3.21-3.21-2.81-1.18-4.39-1.18-3.05.39-4.39 1.18-2.42 1.86-3.22 3.21-1.18 2.82-1.18 4.4zm4.89 5.85 3.75-13.11c.01-.1.06-.15.15-.15s.14.05.15.15l3.74 13.11c.04.11.03.19-.02.25s-.13.06-.24 0l-3.47-1.3c-.1-.04-.2-.04-.29 0l-3.5 1.3c-.1.06-.17.06-.21 0s-.08-.15-.06-.25z"/></svg>
        Wind Direction
        </div>
        <div className='flex justify-between mx-16 my-5'>
        {dataweather[0].wind_cdir_full}
        </div>
      </div>
      <div>
        <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg"  className='mx-2' width="24px" height="24px" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 18a5 5 0 0 0-10 0"/>
  <line x1="12" y1="2" x2="12" y2="9"/>
  <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
  <line x1="1" y1="18" x2="3" y2="18"/>
  <line x1="21" y1="18" x2="23" y2="18"/>
  <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
  <line x1="23" y1="22" x2="1" y2="22"/>
  <polyline points="8 6 12 2 16 6"/>
</svg>
Sunrise
        </div>
        
        <div className='flex justify-between mx-8 my-5'>
        {timeconvert(dataweather[0].sunrise_ts)}
        </div>
      </div>
      <div>
        <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="24px" height="24px" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 18a5 5 0 0 0-10 0"/>
  <line x1="12" y1="9" x2="12" y2="2"/>
  <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
  <line x1="1" y1="18" x2="3" y2="18"/>
  <line x1="21" y1="18" x2="23" y2="18"/>
  <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
  <line x1="23" y1="22" x2="1" y2="22"/>
  <polyline points="16 5 12 9 8 5"/>
</svg>
sunset
        </div>
        
        <div className='flex justify-between mx-6 my-5'>
        {timeconvert(dataweather[0].sunset_ts)}
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
      </div>

  </div>;
}
export default App
