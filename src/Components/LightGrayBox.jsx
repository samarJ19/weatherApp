
import { Box } from "./Box"

export const GrayBox=({ data })=>{
    const trydata=data;
    return <div>{/*light gray box with info */}
    <div className='m-4 w-[800px] bg-gray-101 py-2 rounded-md'>
    <div className='mx-2 text-white font-semibold'>This week's Forecast</div>
    <div className='flex'>
    <Box n={0} dataweather={trydata}/>
    <Box n={1} dataweather={trydata}/>
    <Box n={2} dataweather={trydata}/>
    <Box n={3} dataweather={trydata}/>
    <Box n={4} dataweather={trydata}/>
    <Box n={5} dataweather={trydata}/>
    <Box n={6} dataweather={trydata}/>
    </div>
    </div>
    </div>
}