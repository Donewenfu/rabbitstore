function getLocalStorageData (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

export {
  getLocalStorageData
}
