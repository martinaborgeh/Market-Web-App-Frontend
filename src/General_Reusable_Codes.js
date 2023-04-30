import axios from 'axios'
export function GeneralSignup(url,data){
    axios.post(url,data)
            .then(() => console.log("Successfully posted")).catch(err=>console.log(err.message))

}

