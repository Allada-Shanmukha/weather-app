const request = require('request')

const forecast = (address,lat,long,callback)=>{
  const url = 'http://api.weatherstack.com/current?access_key=56f3f5ea76baa4062f1b8c49a44ce8a8&query='+lat+','+long+''
  
  //27.2046,77.4977'
  request({url:url,json:true},(error,response)=>{
    if(error){
      callback('chack your connectivity',undefined)
    }
    else if(response.body.error){
      callback('check your search, something wrong',undefined)
    }
    else{
      callback(undefined, 'It is currently '+ response.body.current.temperature + ' degrees out there in ' +address)
    }
  })
}

module.exports = forecast 
