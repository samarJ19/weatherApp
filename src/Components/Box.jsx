import { logogetter } from "./Fnlogogetter";

export const Box=({n,dataweather})=>{
  console.log('Received n in NestedChildComponent:', n);
  console.log('Received dataWeather in NestedChildComponent:', dataweather);
  if (!Array.isArray(dataweather)) {
    console.error('Expected an array but received:', typeof dataweather,'in box component');
    return <div>Error: Data format is incorrect</div>;
  }
    function getDayName(dateString) {
        // Create a Date object from the date string
        const date = new Date(dateString);
        
        // Array of day names
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Get the day of the week index
        const dayIndex = date.getDay();
        
        // Get the day name from the array
        return days[dayIndex];
      }
      const dayname=getDayName(dataweather[n].datetime);

    return<div className="m-4 bg-gray-101 w-[120px] h-[130px] text-white flex justify-between">
        <div className="content-center">
        <div>
        {dayname}
        </div>
        <div>
            {dataweather[n].max_temp}/{dataweather[n].min_temp}
        </div>
        <div className='w-12'> {/*logo */}
        <img src={logogetter(n,dataweather)} alt='logo for weather'/>
      </div>
      </div>
      <div className="w-[1px] h-[130px] bg-gray-100">
      </div>
    </div>
}