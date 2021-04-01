const request = require('request')
// geocoding is converting an address into latitude and longitude cordinates
const geocode = (address, callback) =>{
  const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhbm11a2hhOTQ0MDEiLCJhIjoiY2ttYmphM2k0MDE0NzJvbW5sYmUzcnhndCJ9.ztSj84EsfTh7w-8HqM7Uaw'

  request({url:geourl,json:true}, (error,response)=>{
     if(error){
       callback('Unable to connect to internet',undefined)
     }
     else if(response.body.features.length===0){
       callback('cannot find the location',undefined)
     }
     else{
       callback(undefined, {
         latitude: response.body.features[0].center[1],
         longitude: response.body.features[0].center[0],
         location: response.body.features[0].place_name
       })
     }
  })
} 

  
module.exports = geocode