import api from '../Config/api'
import helper from '../Util/helper'

const index = {}

index.getIndexData = () => {
  return helper.get(api.IndexUrl)
}

export default index
