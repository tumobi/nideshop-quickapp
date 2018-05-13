import api from '../Config/api'
import helper from '../Util/helper'

const topic = {}

topic.getTopicDetail = (id) => {
  return helper.get(api.TopicDetail, {id: id})
}


topic.getRelatedTopics = (id) => {
  return helper.get(api.TopicRelated, {id: id})
}


export default topic
