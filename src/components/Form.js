import Button from './Button'

const Form = () => {
  return (
    <form style={{ paddingLeft: '4rem', width: '100%', marginTop: '1rem' }}>
      <label className="text-muted">Credit card</label>
      <input type="text" className="input-large" />

      <label className="text-muted">Name</label>
      <input type="text" className="input-large" />
      <div className="flex-row">
        <div style={{ width: '40%' }}>
          <label className="text-muted">Expiration date</label>
          <input type="text" className="input-small" />
        </div>
        <div style={{ width: '40%', marginLeft: '4rem' }}>
          <label className="text-muted">CVV</label>
          <input type="text" className="input-small" />
        </div>
      </div>
      <div className="flex-row" style={{ alignItems: 'center' }}>
        <Button />
        <p className="text-muted" style={{ marginLeft: '2rem' }}>
          Cancel and return
        </p>
      </div>
    </form>
  )
}

export default Form
