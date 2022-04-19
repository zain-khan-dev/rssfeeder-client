import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://www.localhost:8000/rssfeeder",
    // timeout: 5000,
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

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;
      console.log(originalRequest)
      if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
          const refresh_token = localStorage.getItem('refresh_token');
          console.log(refresh_token)
          return axiosInstance
              .post('http://www.localhost:8000/api/token/refresh/', {refresh: refresh_token})
              .then((response) => {
                
                console.log(response.data)
                  localStorage.setItem('access_token', response.data.access);
                  localStorage.setItem('refresh_token', response.data.refresh);

                  axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                  originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                  return axiosInstance(originalRequest);
              })
              .catch(err => {
                  console.log("refresh token has expired")
                  console.log(err)
              });
      }
      return Promise.reject(error);
  }
);  



export const getAPIDataFromURL = async (url) => {


    try{
      const result = await axiosInstance({
        url:"/rssFromURL/",
        method:"POST",
        data:JSON.stringify(url)
      })
      console.log(result)
      return result
  }
  catch(e){
      console.log("Problem fetching data "+ e)
  }

}



const getAPIData = async (rssChannels) => {


    try{
        const result = axiosInstance({
          url:"/rssFromChannels/",
          method:"POST",
          data:JSON.stringify(rssChannels)
        })
        console.log(result)
        return result
    }
    catch(e){
        console.log("Problem fetching data "+ e)
    }
    
}

export {axiosInstance, getAPIData}

