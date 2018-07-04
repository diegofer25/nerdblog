export default {
  loginUser: (state, user) => {
    localStorage.setItem('user', JSON.stringify(user))
    state.user = {
      _id: user._id,
      name: user.name,
      fullName: user.fullName,
      email: user.email,
      isPoster: user.isPoster
    }
  },

  logoutUser: (state) => {
    state.user = {
      _id: '',
      name: '',
      fullName: '',
      email: '',
      isPoster: ''
    }
    return new Promise(() => 'ok')
  },

  alertUser: (state, payload) => {
    state.alertUser = {
      text: payload.text,
      color: payload.color,
      show: true
    }
  },

  dialogUser: (state, payload) => {
    state.dialogUser = {
      title: payload.title,
      text: payload.text,
      show: true,
      action: payload.action ? payload.action : () => {},
      data: payload.data ? payload.data : {}
    }
  },

  setLoading: (state, payload) => {
    state.loading = payload
  },

  toogleDrawer: (state, payload) => {
    state.drawer = payload
    return state.drawer
  }
}
