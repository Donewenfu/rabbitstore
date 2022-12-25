// 矩阵算法
import bwPowerSet from '@/vender/power-set'
class Skufun {
  static splitStr = '$'
  static getSkupath (goods) {
    // sku 字典
    const pathMap = {}
    // 商品的sku
    const skus = goods.skus
    // 过滤出有库存的sku商品
    skus.forEach((item, index) => {
      if (item.inventory > 0) {
        // 得到sku属性数组
        const specs = item.specs.map(val => val.valueName)
        // 得到sku子集
        const powerArr = bwPowerSet(specs)
        // 把sku 子集拼接成 字符串 用于以后查询
        powerArr.forEach(sku => {
          const key = sku.join(Skufun.splitStr)
          console.log(key)
          // 判断是否存在于字典map 中
          if (pathMap[key]) {
            pathMap[key].push(item.id)
          } else {
            pathMap[key] = [item.id]
          }
        })
      }
    })
    console.log(pathMap)
  }
}

export {
  Skufun
}
