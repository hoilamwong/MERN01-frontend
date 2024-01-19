
/* Formate Date With Two Leading 0 with the inputed Duration (in ms)*/ 
export const formatDate = (duration) =>{
  const d = new Date(Date.UTC(0,0,0,0,0,0, duration))
  let formatedDateParts =[]
  if(duration > 60*60*1000){
    formatedDateParts = [
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds()
    ]
  }else{
    formatedDateParts = [
      d.getUTCMinutes(),
      d.getUTCSeconds()
    ]
  }
  const formatedDate =  formatedDateParts.map(part => (
    part?.toString().padStart(2, '0')
  )).join(':')
  return formatedDate
}
