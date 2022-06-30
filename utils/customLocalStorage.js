export const customLocalStorage = () => {
  return {
    userInfo:
      typeof window !== 'undefined' && localStorage.getItem('userInfo')
        ? JSON.parse(
            typeof window !== 'undefined' && localStorage.getItem('userInfo')
          )
        : null,

    userAccessRoutes:
      typeof window !== 'undefined' && localStorage.getItem('userRole')
        ? JSON.parse(
            typeof window !== 'undefined' && localStorage.getItem('userRole')
          )
        : null,
  }
}

export const config = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        customLocalStorage() &&
        customLocalStorage().userInfo &&
        `Bearer ${customLocalStorage().userInfo.token}`,
    },
  }
}
