
const Card = ({ cityData }) => {
    return (

            <div className="w-full mx-4 w-sm bg-[rgba(255,255,255,0.06)] backdrop-filter backdrop-blur-[20px] border-[1px] border-[solid] border-[rgba(255,255,255,0.1)] [box-shadow:20px_20px_22px_rgba(0,0,0,0.2)] rounded-[8px] font-['Poppins',sans-serif] text-[#fcfcfc]">
                <div className="flex flex-col items-center py-10 gap-4 m-2">
                    <span className="text-xl text-gray-200">{cityData.name}, {cityData.sys.country} </span>
                    <h5 className="mb-1 text-4xl font-bold"> {(cityData.main.temp - 273.15).toFixed(2)} °C</h5>
                    <div className="flex  flex-wrap items-center justify-center mt-4 md:mt-6">
                    <span className="text-md text-gray-200 px-4 py-2 block"><b>Humidity</b>: {cityData.main.humidity}</span>
                    <span className="text-md text-gray-200 px-4 py-2 block"><b>Cloud Cover</b>: {cityData.weather[0].description}</span>
                    <span className="text-md text-gray-200 px-4 py-2 block"><b>Wind Speed</b>: {cityData.wind.speed}  kmph</span>
                    </div>
                </div>
            </div>

    )
}

export default Card
