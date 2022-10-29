import { createStore } from "redux";

const initialState={
    users:[  ],
    loggedInUser:null,
    categoryList:[{
        id:(new Date()).getTime(),
        categoryName:'Bus'
      }
      ],
      carList:[{
        
            id:(new Date()).getTime(),
            categoryName:'Bus',
            color:'Black',
            model:'2019'
          
      }]
} 
const reducer=(state=initialState,action)=>{
switch (action.type) {
    case 'REGISTER':
        return {
            ...state,
            users:[...state.users,action.payload]
        }
        
        case 'LOGIN':
            return {
                ...state,
                users:action.payload
            }
            case 'ADD Category':
                return {
                    ...state,
                    categoryList:[...state.categoryList,action.payload]
                }
                case 'UPDATE Category':
                    const updateCat=state.categoryList.map(item=>item.id===action.payload.id?action.payload:item)
                   state.categoryList=updateCat
                   return    {
                    ...state,
                    categoryList:[...state.categoryList]
                };
                case 'DELETE Category':
                    const deleteCat=state.categoryList.filter(item=>item.id!==action.payload.id )
                   state.categoryList=deleteCat
                   return    {
                    ...state,
                    categoryList:[...state.categoryList]
                };
                case 'ADD Cars':
                return {
                    ...state,
                    carList:[...state.carList,action.payload]
                }
                case 'UPDATE Cars':
                    const updateCar=state.carList.map(item=>item.id===action.payload.id?action.payload:item)
                    state.carList=updateCar
                   return    {
                    ...state,
                    carList:[ ...state.carList]
                };
                case 'DELETE Cars':
                    const deleteCar=state.carList.filter(item=>item.id!==action.payload.id )
                    state.carList=deleteCar
                   return    {
                    ...state,
                    carList:[ ...state.carList]
                };
    default:
        return state;
}
}
export default createStore(reducer);