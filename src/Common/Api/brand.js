import api from '../Config/api'
import helper from '../Util/helper'

const brand = {}

brand.getBrandDetail = (id) => {
  return helper.get(api.BrandDetail, {id: id})
}


brand.getBrandList = (page, size) => {
  return helper.get(api.BrandList, {page, size})
}


export default brand
