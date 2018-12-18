import { combineReducers } from 'redux'


function test(state='测试',action){
    switch(action.type){
        default:return state
    }
}


function hoserList(state=[],action){
    switch(action.type){
        case 'PUSH_HOUSER': return [...state, action.item]
        default:return state
    }
}
export default combineReducers({
    test,
    hoserList
})