import react from 'react'

const AllInOne = react.createContext({
    cartBooks:[],
    userId:'',
    updateUserId: () => {},
    addCartBooksFun: () => {},
    modifyCartBooksFun : () => {},
    deleteCartItem:() => {},
    cartLoadingStatus: false
})

export default AllInOne