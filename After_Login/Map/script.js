mapboxgl.accessToken = 'pk.eyJ1IjoidHR1bmVzdHVkaW8iLCJhIjoiY2xjbGg5anpuNjM3MjN4bGtob205NXJmOSJ9.OD2j3O1OXw1oCXIUqF-ZuQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
    setupMap([-2.24, 53.48])
}
function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 10
      })
      
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
    
      
      map.addControl(directions, 'top-left');
}

