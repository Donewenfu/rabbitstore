function getLocalStorageData (key) {
  return JSON.parse(window.localStorage.getItem(key))
}
function setStorageData (key, data) {
  window.localStorage.setItem(key, data)
}
export {
  getLocalStorageData,
  setStorageData
}
