import { useState } from "react";
import Card from "./Card";
import Loader from "./Loader";


const Main = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [city, setCity] = useState([]);

  const handleSearchButton = (e) => {
    e.preventDefault();
    setLoading(true)
    setSearch(e.target[0].value)
    if (search === '') {
      setStatus('Enter a city name')
      setLoading(false)
    }
    else {
      fetchData()
    }
  }
  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${import.meta.env.VITE_WEATHER_KEY}`)
      if (res.ok) {
        const data = await res.json()
        setCity([...city, data])
        setSearch('')
        setLoading(false)
        setStatus('Successfully Fetched')
        setTimeout(() => {
          setStatus('')
  
        }, 3000);
  
      }
      else {
        setStatus('City Not Found, Try Again')
        setTimeout(() => {
          setStatus('')
  
        }, 3000);
        setLoading(false)
      }  
      
    } catch (error) {
      console.log(error)
      setLoading(false)
      setStatus('Failed to Fetch Data, Please Check your Internet Connection and try again')
      return
    }
   
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-5 pt-10">
        <form onSubmit={handleSearchButton} className="w-full flex items-center justify-center p-5 pb-0 mt-10" >
          <input className="text-xl border-b-2 text-white border-white outline-none p-2 m-2 cursor-pointer" type="text" placeholder="Enter city to search " value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="m-2 text-2xl cursor-pointer hover:scale-150 duration-300 ease-in ease-out  mb-0" type="submit">🔍</button>
        </form>
        <h2 className="text-white">{status}</h2>
      </div>

      <div className="py-10 py-auto ">

        <ul className="flex flex-wrap items-center gap-4 justify-center">
          
          {
            loading ? <Loader /> :
            city.map((index, key) => {
              return <Card cityData={index} key={key} />
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Main
