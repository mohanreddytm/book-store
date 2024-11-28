import react from 'react'

const AllInOne = react.createContext({
    cartBooks:[],
    addCartBooksFun: () => {},
    modifyCartBooksFun : () => {}
})

export default AllInOne