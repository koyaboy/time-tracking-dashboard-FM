import { useRef, useState } from "react"
import Card from "./components/Card"

import data from "/data.json"
import { imageJeremy } from "./assets/images/images"

function App() {

  const [selection, setSelection] = useState("Weekly")

  const dailyRef = useRef(null)
  const weeklyRef = useRef(null)
  const monthlyRef = useRef(null)

  const handleSelection = (ref) => {
    dailyRef.current.classList.remove("active")
    weeklyRef.current.classList.remove("active")
    monthlyRef.current.classList.remove("active")

    ref.current.classList.add("active")
    setSelection(ref.current.textContent)
  }

  return (
    <>
      <div className="bg-very-dark-blue min-w-screen min-h-screen px-4 py-16">
        <div>
          <div className="bg-blue p-6 rounded-xl flex items-center gap-4 z-10 relative">
            <div className="w-16 h-16 rounded-[50%] border-4">
              <img
                src={imageJeremy}
                alt="image-jeremy"
                className="w-full h-full"
              />
            </div>
            <div className="text-white">
              <div className="text-sm font-light text-pale-blue">Report for</div>
              <div className="text-xl font-light">Jeremy Robson</div>
            </div>
          </div>

          <div className="bg-dark-blue px-6 py-5 rounded-b-lg relative -top-2 z-0">
            <div className="text-pale-blue flex justify-between">
              <div ref={dailyRef} onClick={() => handleSelection(dailyRef)}>Daily</div>
              <div ref={weeklyRef} className="active" onClick={() => handleSelection(weeklyRef)}>Weekly</div>
              <div ref={monthlyRef} onClick={() => handleSelection(monthlyRef)}>Monthly</div>
            </div>
          </div>
        </div>

        <div>
          {data.map((item, index) => (
            <Card key={index}
              title={item.title}
              selection={selection}
              dailyCurrent={item.timeframes.daily.current}
              dailyPrevious={item.timeframes.daily.previous}
              weeklyCurrent={item.timeframes.weekly.current}
              weeklyPrevious={item.timeframes.weekly.previous}
              monthlyCurrent={item.timeframes.monthly.current}
              monthlyPrevious={item.timeframes.monthly.previous}
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
