import { combineReducers } from 'redux'

const initMemberList = [
    {
        name: 'Luis',
        lastName: 'Rosas',
        address: 'Malva Sur 301',
        rol: 'Vocal'
    }
]

const adminReducer = (memberList = [], action) => {
    switch(action.type){
        case 'ADD_MEMBER':
            return [...memberList, action.payload]
        case 'DELETE_MEMBER':
            return memberList.filter((member)=>{return member.name !== action.payload})
        default:
            return memberList
    }
}

export default combineReducers({
    adminFunctions: adminReducer
})