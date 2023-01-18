// 把一维数组分割成二维数组
export function sliceArr (arr, size) {
  // 判断是否为数组
  if (arr instanceof Array && arr.length > 0) {
    const sliceArr = []
    // 根据数组进行判断一共要分割出多少个二维数组 向上取整
    const total = Math.ceil(arr.length / size)
    for (let i = 0; i < total; i++) {
      sliceArr.push(arr.slice(i * size, (i + 1) * size))
    }
    return sliceArr
  } else {
    return []
  }
}

// 获取随机数 max-min
export function getRandom (min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

//
