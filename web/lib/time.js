export const unixToTime = ({unix}) => {
  let date = new Date( unix * 1000 )
  return `${date.getHours()}:${date.getMinutes()}`
}

