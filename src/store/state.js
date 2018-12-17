let defaultCity = '成都'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}
export default {
  city: defaultCity
}
