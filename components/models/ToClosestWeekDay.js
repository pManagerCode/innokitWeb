import moment from 'moment'

export const toClosestWeekDay = date => {
  const dayINeed = 1
  const dayNumber = moment(date).isoWeekday()
  const friday = 5
  if (dayNumber > friday) {
    return moment(date)
      .add(1, 'weeks')
      .isoWeekday(dayINeed)
  }
  return date
}
