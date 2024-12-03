import react from 'react'

const AllInOne = react.createContext({
    cartBooks:[],
    addCartBooksFun: () => {},
    modifyCartBooksFun : () => {},
    deleteCartItem:() => {}
})

export default AllInOne