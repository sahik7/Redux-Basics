import './App.css'
import { decrement, increment, incrementByValue } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'


function App() {
  // const [count, setCount] = useState(0)
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="flex items-center justify-center space-x-8 h-screen">
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded bg-orange-600 text-xl font-semibold text-white hover:bg-orange-700">Increment</button>
        <h1 className="text-xl">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded bg-violet-600 text-xl font-semibold text-white hover:bg-violet-700">Decrement</button>
        <button onClick={() => dispatch(incrementByValue(5))} className="px-3 py-2 rounded bg-violet-600 text-xl font-semibold text-white hover:bg-violet-700">Decrement</button>
      </div>
      <h1>React with redux</h1>
    </>
  )
}

export default App
