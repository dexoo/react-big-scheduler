import React, {Component} from 'react';
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from '../src/index';
import "moment/locale/pl";
import moment from 'moment';
import withDnDContext from "./withDnDContext";
import config from "./config";
import behaviors from "./behaviors";

class ReactDnD11 extends Component {
  constructor(props) {
    super(props);

    moment.locale('pl-pl');
    const schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Day, false,
      false, config, behaviors, moment);

    this.resources = [
      {
        id: 'r0',
        name: 'Jan Kowalski'
      },
      {
        id: 'r1',
        name: 'Kasia Nowak'
      },
      {
        id: 'r2',
        name: 'Milena Oko'
      },
      {
        id: 'r3',
        name: 'Małgorzata Testowa'
      },
      {
        id: 'r4',
        name: 'Joanna Pokazowa'
      },
    ];
    schedulerData.setResources(this.resources);

    //the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
    this.events = [
      {
        id: 2,
        start: '2020-08-12 05:00:00',
        end: '2020-08-12 21:00:00',
        resourceId: 'r3',
        title: 'Urlop',
        movable: false,
        resizable: false,
        bgColor: '#D9D9D9'
      },
      {
        id: 3,
        start: '2020-08-12 05:00:00',
        end: '2020-08-12 21:00:00',
        resourceId: 'r2',
        title: 'L4',
        movable: false,
        resizable: false,
        bgColor: '#ffc0c0'
      },
      {
        id: 4,
        start: '2020-08-12 14:30:00',
        end: '2020-08-12 16:30:00',
        resourceId: 'r1',
        title: 'WP',
      },
      {
        id: 5,
        start: '2020-08-12 15:30:00',
        end: '2020-08-12 17:30:00',
        resourceId: 'r2',
        title: 'LP',
        bgColor: '#f759ab'
      }
    ];
    schedulerData.setEvents(this.events);

    this.state = {
      viewModel: schedulerData
    }
  }

  getEvents = date => {
    return {
      resources: this.resources,
      events: this.events
    }
  };

  handleChangeDay = async schedulerData => {
    const {selectDate} = schedulerData;
    const {resources, events} = await this.getEvents(selectDate);
    schedulerData.setEvents(events);
    schedulerData.setResources(resources);

    this.setState({
      viewModel: schedulerData
    });
  }

  prevClick = async schedulerData => {
    schedulerData.prev();
    await this.handleChangeDay(schedulerData);
  }

  nextClick = async schedulerData => {
    schedulerData.next();
    await this.handleChangeDay(schedulerData);
  }

  onViewChange = (schedulerData, view) => {
  }

  onSelectDate = (schedulerData, date) => {
  }

  eventClicked = (schedulerData, event) => {
    console.log(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  prepareHoursTitle = (start, end) => {
    const startHour = new moment(start).format('HH:mm');
    const endHour = new moment(end).format('HH:mm');

    return `${startHour} - ${endHour}`;
  }

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    let newFreshId = 0;

    schedulerData.events.forEach((item) => {
      if (item.id >= newFreshId)
        newFreshId = item.id + 1;
    });

    let newEvent = {
      id: newFreshId,
      title: this.prepareHoursTitle(start, end),
      start: start,
      end: end,
      resourceId: slotId,
      bgColor: 'purple'
    }

    schedulerData.addEvent(newEvent);
    this.setState({
      viewModel: schedulerData
    });
  }

  updateEventStart = (schedulerData, event, newStart) => {
    event.title = this.prepareHoursTitle(newStart, event.end);
    schedulerData.updateEventStart(event, newStart);
    this.setState({
      viewModel: schedulerData
    });
  }

  updateEventEnd = (schedulerData, event, newEnd) => {
    event.title = this.prepareHoursTitle(event.start, newEnd);
    schedulerData.updateEventEnd(event, newEnd);
    this.setState({
      viewModel: schedulerData
    });
  }

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    event.title = this.prepareHoursTitle(start, end);
    schedulerData.moveEvent(event, slotId, slotName, start, end);
    this.setState({
      viewModel: schedulerData
    });
  }

  ops1 = (schedulerData, event) => {
    if (event.movable === false && event.resizable === false) return false;

    schedulerData.removeEvent(event);
    this.setState({
      viewModel: schedulerData
    });
  }

  render() {
    const {viewModel} = this.state;

    return (
      <>
        {viewModel && (
          <Scheduler schedulerData={viewModel}
                     prevClick={this.prevClick}
                     nextClick={this.nextClick}
                     onSelectDate={this.onSelectDate}
                     onViewChange={this.onViewChange}
                     eventItemClick={this.eventClicked}
                     updateEventStart={this.updateEventStart}
                     updateEventEnd={this.updateEventEnd}
                     moveEvent={this.moveEvent}
                     newEvent={this.newEvent}
                     viewEventClick={this.ops1}
                     viewEventText="Delete"
          />
        )}
      </>
    )
  }
}

export default withDnDContext(ReactDnD11);