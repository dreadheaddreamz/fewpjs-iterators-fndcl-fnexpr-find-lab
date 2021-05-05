superbowlWin = (rec) => {
  let result = rec.find( rec => rec.result === "W" )
  return !!result ? result.year : undefined
}
