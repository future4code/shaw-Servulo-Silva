import { useState } from 'react';
import Header from './Components/Header/Header'
import Main from './Pages/Main/Main';
import axios from 'axios'
import { BASE_URL } from './Constants/base_url';

const App = () => {

  const [allParticipations, setAllParticipations] = useState([])
  
  const getParticipations = async () => {
    await axios
    .get(BASE_URL)
    .then((res) => {
            setAllParticipations(res.data)
        })
        .catch((err) => {
            console.log(err.response)

        })
    }


  return (
    <div>
      <Header 
      getParticipations={getParticipations}
      allParticipations={allParticipations}
      />
      <Main 
      getParticipations={getParticipations}
      allParticipations={allParticipations}
      />
    </div>
  )
}

export default App;