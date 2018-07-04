const userStored = JSON.parse(localStorage.getItem('user'))

export default {
  user: {
    _id: userStored ? userStored._id : '',
    name: userStored ? userStored.name : '',
    fullName: userStored ? userStored.fullName : '',
    email: userStored ? userStored.email : '',
    isPoster: userStored ? userStored.isPoster : ''
  },

  alertUser: {
    text: '',
    color: 'success',
    show: false
  },

  dialogUser: {
    title: '',
    text: '',
    show: false,
    action: () => {},
    data: {}
  },

  loading: false,
  drawer: true
}
