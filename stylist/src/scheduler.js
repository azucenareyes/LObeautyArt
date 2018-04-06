import React from 'react'
import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import events from './events.js'
import moment from 'moment'


BigCalendar.momentLocalizer(moment)


const Scheduler = (props) => (

  <BigCalendar
    className="myCalendar"
    selectable
    events={events}
    defaultView="week"
    min={new Date(1970, 1, 1, 7)}
    max={new Date(1970, 1, 1, 1)}
    scrollToTime={new Date(1970, 1, 1, 6)}
    defaultDate={new Date(2015, 3, 12)}
    onSelectEvent={event => alert(event.title)}
    onSelectSlot={slotInfo =>
      alert(
        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
          `\nend: ${slotInfo.end.toLocaleString()}` +
          `\naction: ${slotInfo.action}`
      )
    }
  />
)

export default Scheduler
