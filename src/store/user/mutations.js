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
  }
}
