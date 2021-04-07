import Accordion from '../../components/Accordion'
import Steps from '../../components/Steps'
const steps = [
  {
    step: 'Shipping',
    color: '#A2B5E4',
    icon: <i className="fas fa-dolly-flatbed" style={{ color: '#414e7b' }}></i>,
  },
  {
    step: 'Payment',
    color: '#f8ca9f',
    icon: <i className="far fa-credit-card" style={{ color: '#ac682a' }}></i>,
  },
  {
    step: 'Review',
    color: '#bddba6',
    icon: <i className="fas fa-sync" style={{ color: '#576f44' }}></i>,
  },
]
const OrderSummary = () => {
  return (
    <div className="ordersum-cont">
      <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>Order Summary</p>
      <div className="flex-row space-between" style={{ margin: '3.5rem 0' }}>
        {steps.map((el, i) => (
          <Steps key={i} color={el.color} step={el.step} index={i} icon={el.icon} />
        ))}
      </div>

      <Accordion title="Prada" expanded />
      <div className="expanded">
        <div className="flex-row space-between order-items ">
          <p className="text-muted">Leather mini-bag</p>
          <p className="text-black">$1850.00</p>
        </div>
        <div className="flex-row space-between order-items">
          <p className="text-muted"> Estimated shipping</p>
          <p>$370.00</p>
        </div>
        <div className="flex-row space-between order-items ">
          <p className="text-muted">Discount</p>
          <p>$0.00</p>
        </div>
        <div className="flex-row space-between order-items">
          <p className="text-muted">Total</p>
          <p style={{ fontWeight: 'bold' }}>$2220.0</p>
        </div>
      </div>
      <Accordion title="Dr.Martens" />
      <Accordion title="Chanel" />
      <div className="flex-row space-between" style={{ marginTop: '2rem' }}>
        <p>Total Amount:</p>
        <p style={{ color: '#111414', fontSize: '1rem', fontWeight: 'bold' }}>$3680.60</p>
      </div>
    </div>
  )
}

export default OrderSummary
