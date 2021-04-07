const Steps = ({ color, step, index, icon }) => {
  return (
    <div className="step-wrap">
      <div
        style={{
          backgroundColor: color,
          borderRadius: '50%',
          height: '3rem',
          width: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </div>
      <div style={{ paddingLeft: '1rem' }}>
        <p style={{ fontSize: '14px' }} className="text-muted">
          Step {index + 1}
        </p>
        <p className="text-muted" style={{ fontSize: '14px', color: index === 1 ? '#111414' : '#898a8b' }}>
          {step}
        </p>
      </div>
    </div>
  )
}

export default Steps
