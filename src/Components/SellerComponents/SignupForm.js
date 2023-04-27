import axios from 'axios'
import { useState} from "react"
export function Signup(){
    const [Firstname, setFirstname] = useState('')
    const [Lastname, setLastname] = useState('')
    const [Location, setLocation] = useState('')

     const handleSubmit = function(event){
        event.preventDefault()
        const SignUpData ={
            Firstname,
            Lastname,
            Location
        }
 
        axios.post('http://localhost:5000/Signup', SignUpData)
            .then(() => console.log("Successfully posted")).catch(err=>console.log(err.message))
     }
    return(
        <form onSubmit={handleSubmit}>
            
        <input value={Firstname} placeholder='First Name' onChange={e=>setFirstname(e.target.value)} type ="text" name = "name"></input>
        <input value={Lastname} placeholder='Last Name' onChange={e=>setLastname(e.target.value)} type ="text" name = "name"></input>
        <input value={Location} placeholder='Location' onChange={e=>setLocation(e.target.value)} type ="text" name = "name"></input>
        <button type ="submit" name = "submit">Submit</button> 
      </form>
    )
}

