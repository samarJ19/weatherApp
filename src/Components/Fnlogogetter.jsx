import { dataforlogo } from "./logo";

export function logogetter(n,dataweather){
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