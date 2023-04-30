import { useState} from "react"
import { GeneralSignup} from "../../General_Reusable_Codes"
export function FarmerSignup(){
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
 
        GeneralSignup('http://localhost:8000/FarmerSignup',SignUpData)
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

