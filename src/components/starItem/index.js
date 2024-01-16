import './index.css'

const starItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {title, isstarred, id, date} = appointmentDetails

  const onclickingstar = () => {
    toggleStar(id, title, isstarred, date)
  }

  const starImage = isstarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="li">
      <div className="titlestar">
        <h1 className="title">{title}</h1>
        <button onClick={onclickingstar}>
          <img src={starImage} alt="star" className="star" />
        </button>
      </div>
      <p className="datepara">Date: {date},Tuesday</p>
    </li>
  )
}
export default starItem
