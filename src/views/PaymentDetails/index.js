import CCard from '../../components/CCard'
import Form from '../../components/Form'

const PaymentDetails = () => {
  return (
    <div className="p-details-cont">
      <div className="flex-row space-between">
        <h4>Tolly</h4>
        <div className=" menu-wrap flex-row space-between">
          <i class="fas fa-chevron-down"></i>
          <p>Annette</p>
          <div>
            <img
              style={{ height: '2rem', width: '2rem', backgroundColor: 'red', borderRadius: '50%' }}
              src="https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>

      <div className="flex-row space-between" style={{ alignItems: 'baseline', marginTop: '3rem' }}>
        <p style={{ fontWeight: 'bold', fontSize: '2.5rem' }} className="text-black">
          Payment details
        </p>
        <div className="flex-row">
          <i class="fas fa-lock"></i>
          <div style={{ paddingLeft: '1rem' }}>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.7rem' }} className="text-black">
              Card is secure
            </p>
            <p className="text-muted" style={{ lineHeight: '20px' }}>
              Your data is protected,
              <br /> everything will be private
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row" style={{ margin: '2rem 0', gap: '45px', borderBottomWidth: 1, borderColor: 'red' }}>
        <p className="tab-items">Credit Card</p>
        <p className="text-muted">Paypal</p>
        <p className="text-muted">Other</p>
      </div>
      {/* <hr /> */}
      <div className="flex-row space-between">
        <div>
          <CCard color="#ced9fd" />
          <CCard color="#f9cba1" />
          <CCard color="#bddba6" />
        </div>
        <Form />
      </div>
    </div>
  )
}

export default PaymentDetails
