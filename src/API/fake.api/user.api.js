import {professionsObject as professions} from './professions.api'
import {resolve} from 'eslint-plugin-promise/rules/lib/promise-statics'

const qualities = {
  tedious: {
    _id: '67rdca3eeb7f6fgeed471198',
    name: 'Нудила',
    color: ' light-blue darken-4'
  },
  strange: { _id: '67rdca3eeb7f6fgeed471100', name: 'Странный', color: 'grey' },
  buller: { _id: '67rdca3eeb7f6fgeed4711012', name: 'Троль', color: 'green' },
  alcoholic: {
    _id: '67rdca3eeb7f6fgeed471101',
    name: 'Алкоголик',
    color: 'red'
  },
  handsome: {
    _id: '67rdca3eeb7f6fgeed471102',
    name: 'Красавчик',
    color: 'deep-purple darken-1'
  },
  uncertain: {
    _id: '67rdca3eeb7f6fgeed471102',
    name: 'Неуверенный',
    color: 'black'
  }
}

const users = [
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'Джон Дориан',
    profession: professions.doctor,
    qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
    completedMeetings: 36,
    rate: 2.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'Кокс',
    profession: professions.doctor,
    qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
    completedMeetings: 15,
    rate: 2.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'Боб Келсо',
    profession: professions.doctor,
    qualities: [qualities.buller],
    completedMeetings: 247,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'Рэйчел Грин',
    profession: professions.waiter,
    qualities: [qualities.uncertain],
    completedMeetings: 148,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'Шелдон Купер',
    profession: professions.physics,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 37,
    rate: 4.6,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'Леонард Хофстедтер',
    profession: professions.physics,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 147,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'Говард Воловиц',
    profession: professions.engineer,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 72,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'Никола Тесла',
    profession: professions.engineer,
    qualities: [qualities.handsome],
    completedMeetings: 72,
    rate: 5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    name: 'Моника Геллер',
    profession: professions.cook,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471824',
    name: 'Рататуй',
    profession: professions.cook,
    qualities: [qualities.handsome, qualities.buller],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed47181f',
    name: 'Джоуи Триббиани',
    profession: professions.actor,
    qualities: [qualities.uncertain, qualities.strange],
    completedMeetings: 434,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed47181r',
    name: 'Брэд Питт',
    profession: professions.actor,
    qualities: [qualities.handsome],
    completedMeetings: 434,
    rate: 5,
    bookmark: false
  }
]
const fetchAll = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(users), 100)
  })

const getById = id =>
  new Promise(resolve => {
    setTimeout(() => resolve(users.find(user => user._id === id)))
  })

export default {
  fetchAll,
  getById
}