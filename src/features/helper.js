
/* Formate Date With Two Leading 0 with the inputed Duration (in ms)*/
export const formatDate = (duration) => {
  const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, duration))
  let formatedDateParts = []
  if (duration > 60 * 60 * 1000) {
    formatedDateParts = [
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds()
    ]
  } else {
    formatedDateParts = [
      d.getUTCMinutes(),
      d.getUTCSeconds()
    ]
  }
  const formatedDate = formatedDateParts.map(part => (
    part?.toString().padStart(2, '0')
  )).join(':')
  return formatedDate
}


export const createSmallButtons = (condition, arr, method) => {
  /* change bg-color when the item of an arr contains the condition string*/
  // actionType (button) name is typically longer than the set codition state
  const bgColor = (actionType) => {

    const actionString = actionType.toUpperCase().replace(/\s/g, '')
    const conditionString = condition.toUpperCase().replace(/\s/g, '')
    if(actionString.search(conditionString) !== -1){
      return 'bg-white/30'
    } else {
      return ''
    }
    // actionType.replace('/\s/g', "").toUpperCase().search(condition.toUpperCase()) !== -1 ?
    //   'bg-white/30' : ''
  }
  return (
    arr.map(item => (
      <button
        title={`${item}`}
        key={item}
        name={item}
        onClick={method}
        className={`btn_small_basic hover:bg-white/30 transition  ${bgColor(item)}`}
      >
        {item}
      </button>
    ))
  )
}

export const toggleDisplayContent = (condition, arr) => {
  /* change bg-color when the timer type matches the action type of the button */
  const visible = (actionType) => (
    condition.toUpperCase().search(actionType.toUpperCase()) !== -1 ?
      'inline' : 'hidden'
  )
  return (
    arr.map(item => (
      <div
        key={item}
        className={`${visible(item)}`}
      >
        {item} helllllllllllo
      </div>
    ))
  )
}