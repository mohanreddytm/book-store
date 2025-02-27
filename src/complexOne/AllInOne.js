import react from 'react'

const AllInOne = react.createContext({
    cartBooks:[],
    userId:'',
    updateUserId: () => {},
    addCartBooksFun: () => {},
    modifyCartBooksFun : () => {},
    deleteCartItem:() => {}
})

export default AllInOne