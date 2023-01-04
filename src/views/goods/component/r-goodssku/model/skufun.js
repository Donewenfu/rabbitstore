// 矩阵算法
import bwPowerSet from '@/vender/power-set'
class Skufun {
  // 规格组合分割符号
  static splitStr = '$'
  // sku字典 用户后期查找
  static getSkupath (goods) {
    // sku 字典
    const pathMap = {}
    // 商品的sku
    const skus = goods.skus
    // 过滤出有库存的sku商品
    skus.forEach((item, index) => {
      // 判断库存是否大于0
      if (item.inventory > 0) {
        // 得到sku属性数组
        const specs = item.specs.map(val => val.valueName)
        // 得到sku子集
        const powerArr = bwPowerSet(specs)
        // 把sku 子集拼接成 字符串 用于以后查询
        powerArr.forEach(sku => {
          const key = sku.join(Skufun.splitStr)
          // 判断是否存在于字典map 中
          if (pathMap[key]) {
            pathMap[key].push(item.id)
          } else {
            pathMap[key] = [item.id]
          }
        })
      }
    })
    return pathMap
  }

  // 获取已选中的数组数据 返回一个数组 如果没有选中的 值填写成undefined  如果选中了 就填写选中的规格名字
  // 这个函数返回的数组主要是在用户点击的时候 把选中的数组 去除 undefined 把选中的数组数据生成成字符串 再 sku字典中查找 如果找到了 说明有这个组合的选中
  static getSelectedValues (spesc) {
    // 定一个空数组用于装选中的规格
    const arr = []
    // 循环规格数组中的每一项 如果 每项规格中的selected是true那么证明用户是选中的，就可以添加到选中数组中 如果都没选中 那个这个下标数组就算 undefined
    spesc.forEach((item, index) => {
      // 在数组中查找选中的对象
      const selectVal = item.values.find(val => val.selected)
      // 往选中数组中添加数据
      arr.push(selectVal ? selectVal.name : undefined)
    })
    return arr
  }

  // 更新每个规格的禁用状态 (单元格)
  static updateDisabledStatus = (specs, pathMap) => {
    // 约定每个按钮的状态由本身的disabled数据控制
    // 循环规格数据
    specs.forEach((item, index) => {
      // 用户选中的选项 返回的是用户选中的规格数组 列入[ 白色, '20CM']
      const userSelectspec = Skufun.getSelectedValues(specs)
      // 判断每项规格
      item.values.forEach(val => {
        // 判断当前规格是否选中，如果选中了证明是可以选择的 选中以后不执行
        if (val.selected) return
        // 非选中的情况 拿当前用户选中的数组数据套入当前数据
        userSelectspec[index] = val.name
        // 剔除筛选undefined值，拼接成字符串 在字典给中查找 找到了证明是可以被选中的 ,拼接成字符串
        const filterKey = userSelectspec.filter(val => val).join(Skufun.splitStr)
        // 设置禁止点击属性 没找到false 取反 就 true 证明没有在sku字典中找到
        val.disabled = !pathMap[filterKey]
      })
    })
  }

  // 根据skuid 选中规格
  static initDefaultsku(goods, skuid) {
    // 根据skuid 在skus 集合中找到sku单品
    // 判断skuid是否存在
    if (skuid) {
      const currentSku = goods.skus.find(sku => sku.id === skuid)
      // 如果早skus中找到
      if (currentSku) {
        goods.specs.forEach((spec, index) => {
          // 当前规格 找到sku 的规格
          const skuName = currentSku.specs[index].valueName
          // 循环商品规格
          spec.values.forEach(val => {
            // 如果找到的规格名字等于 specs 中的name 那么给这个规格设置一个选中状态
            val.selected = val.name === skuName
          })
        })
      }
    }
  }
}

export {
  Skufun
}
