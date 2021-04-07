const Accordion = ({ title, expanded }) => {
  return (
    <div className="accordion">
      <h5>{title}</h5>
      {expanded ? <i className="fas fa-chevron-up text-muted"></i> : <i className="fas fa-chevron-down text-muted"></i>}
    </div>
  )
}

export default Accordion
