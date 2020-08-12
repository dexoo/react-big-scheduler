import {CellUnits} from '../src/index';
import config from "./config";

export const isNonWorkingTime = (schedulerData, time) => {
  const {localeMoment} = schedulerData;
  if (schedulerData.cellUnit === CellUnits.Hour) {
    let hour = localeMoment(time).hour();
    if (hour < config.dayStartFrom || hour > config.dayStopTo)
      return true;
  } else {
    let dayOfWeek = localeMoment(time).weekday();
    if (dayOfWeek === 0 || dayOfWeek === 6)
      return true;
  }

  return false;
}

export default {
  isNonWorkingTimeFunc: isNonWorkingTime
}