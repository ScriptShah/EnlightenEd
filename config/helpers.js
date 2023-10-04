import axios, { Axios, AxiosError } from "axios";




  export const grabData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/course_title`);
      console.log(response.data);

    } catch (err) {
      if(err.message == "Network Error"){
        alert('Check your internet connection !');
      }else{
        alert('Please try again!');
      }
    throw err;
    }
  };



