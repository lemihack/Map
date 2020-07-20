updateMap = async () => {
    const response = await fetch("/data.json")
    const rsp = await response.json();
    console.log(rsp.data);
    
    rsp.data.forEach(element => {
        longitude = element.longitude;
        latitude = element.latitude
        cases = element.infected;
        if(cases>255){
            color = 'rgb(255,0,0)';
        }else{
            color = `rbg(${cases},0,0)`
        }

     new mapboxgl.Marker(
         {
             draggable: false,
             color: color
         }
     ).setLngLat([longitude, latitude]).addTo(map)

    });







}

updateMap()
setInterval(updateMap, 10000);