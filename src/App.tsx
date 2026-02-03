import { useAppDispatch, useAppSelector } from './store/hooks'
import { increment, decrement } from './store/slice'

function App() {
  const value = useAppSelector((state) => state.app.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Value: {value}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
