import axios from "axios"


const axiosInstance = axios.create({
    baseURL:"http://www.localhost:8000/rssfeeder",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


axiosInstance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access_token');
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete axiosInstance.defaults.headers.common.Authorization;
      }
      return config;
    },
    error => Promise.reject(error)
  );
  




const getAPIData = async () => {

    try{
        const data = axiosInstance.get("/index/")
        console.log(data)
        return data
    }
    catch(e){
        console.log("Problem fetching data "+ e)
    }
    
}

export {axiosInstance, getAPIData}

