import api from '../Config/api'
import helper from '../Util/helper'

const goods = {}

goods.getGoodsDetail = (id) => {
  return helper.get(api.GoodsDetail, {id: id})
}


goods.getRelatedGoods = (id) => {
  return helper.get(api.GoodsRelated, {id: id})
}


export default goods
