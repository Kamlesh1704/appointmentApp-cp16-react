// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import starItem from '../starItem'

class Appointments extends Component {
  state = {
    id: uuidv4(),
    title: '',
    date: '',
    appointmentList: [],
    isstarred: false,
    normalList: true,
  }

  onclickingstarredbutton = () => {
    const {normalList} = this.state
    if (normalList === true) {
      this.setState(prevState => ({normalList: (prevState.normalList = false)}))
    } else {
      this.setState(prevState => ({normalList: (prevState.normalList = true)}))
    }
  }

  onchangingTitle = event => {
    this.setState({title: event.target.value})
  }

  onchangingDate = event => {
    this.setState({date: event.target.value})
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isstarred: !eachAppointment.isstarred}
        }
        return eachAppointment
      }),
    }))
  }

  onsubmiting = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isstarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentList, normalList} = this.state
    return (
      <div className="div">
        <div className="carddiv">
          <div className="detailimg">
            <div>
              <form onSubmit={this.onsubmiting} className="details">
                <h1 className="heading">Add Appointment</h1>
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  type="text"
                  className="inputtitle"
                  onChange={this.onchangingTitle}
                />

                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  id="date"
                  className="inputdate"
                  onChange={this.onchangingDate}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
        </div>

        <hr />
        <div className="appointmentsandstarred">
          <h1 className="appointment">Appointments</h1>
          <buton onClick={this.onclickingstarredbutton} className='starredbutton'>Starred</buton>
        </div>

        {normalList ? (
          <ul>
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                toggleStar={this.toggleStar}
              />
            ))}
          </ul>
        ) : (
          <ul>
            {appointmentList.map(eachAppointment => {
              if (eachAppointment.isstarred === true) {
                ;<starItem appointmentDetails={eachAppointment} />
              }
            })}
          </ul>
        )}
      </div>
    )
  }
}
export default Appointments
