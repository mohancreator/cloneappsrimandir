import React from 'react'

const ContextForAll = React.createContext({
  activeState: "home",
  activeChange: () => {},
  myPujaList: [],
  addPuja: () => {}
})

export default ContextForAll
