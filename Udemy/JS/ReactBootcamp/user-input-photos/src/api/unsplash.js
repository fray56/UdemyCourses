import axios from 'axios';


//export default so other files can use this one

// use axios.create to make a default config when we make an axios call.
// helps to keep the config seperate from the main app code. 

export default axios.create({
    // this is the default api endpoint the call will make.. any queries can be added specifically where the call is made.
    baseURL: 'https://api.unsplash.com',
    // set any default headers here.
    headers: {
        // api key to access the unsplash api
        Authorization: 'Client-ID EVONpdVoAiOzj5oIpJlyCd7a6NRTmROpFFG9o2ywMNo'
   } 
})