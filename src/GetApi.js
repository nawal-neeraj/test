

//var urlString = "https://api.beatmysugar.com/";

// var urlString = "http://172.20.10.14:7000/";
var urlString = "http://162.241.201.104/staycovid-19free/";

const GetApiCall = {
  getRequest(url) {

   return fetch(urlString+url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers' : '*',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // console.log(response)
      return(response)
     
    })
    .catch(error => { console.log('request failed', error); 
    return error;
  });
  },
};

export default GetApiCall;
