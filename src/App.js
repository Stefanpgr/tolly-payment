import './App.scss'
import OrderSummary from './views/OrderSummary'
import PaymentDetails from './views/PaymentDetails'

function App() {
  return (
    <div className="App">
      <div className="flex-cont">
        <PaymentDetails />
        <OrderSummary />
      </div>
    </div>
  )
}

export default App
