import React, { useState} from "react";
import DataTableComp from "../misc/dataTable/dataTableComp";
import { Link } from "react-router-dom";
import ButtonComp from "../misc/button/buttonComp";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { textValidation } from "../misc/validationComp/validationComp";
import { openNotificationWithIcon } from "../misc/toastComp";
function CategoryComp() {
const [categoryName,setCategoryName]=useState('') //inputField
const [addBtn,setAddBtn]=useState(false) //flag for add button click
const [editObj,setEditObj]=useState({}) //obj for edit click
const dispatch=useDispatch()
const categoryList=useSelector(state=>state.categoryList) //select category list from redux store
    const columns = [
        {
            name: 'Category Name',
            selector: row => row.categoryName,
            sortable:true
        },
        {
            name: 'Action',
           
            cell: (params) => (
             <div>
                <Link>
              &nbsp;
              <i className="fas fa-solid fa-plus text-success mx-1" onClick={()=>addBtnClick(params)}/>
              </Link>
              <Link>
              <i className="fas fa-edit text-primary" onClick={()=>editClick(params)}/></Link>
              <Link>
              &nbsp;
            
              <i className="fas fa-trash text-danger" onClick={()=>deleteClick(params)}/>
              </Link>

             </div>
  
            ),
           
          
            // ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ]; //columns for table

    const validateCat=()=>{
      if (
        textValidation("Category Name", categoryName) 
      ) {
        return false;
      }else 
        return true;
     }
const addBtnClick=()=>{
setCategoryName('')
setEditObj({})
setAddBtn(true)
} //called on add btn click
const saveData=()=>{
 if(validateCat()){
    dispatch({
      type:'ADD Category',
      payload:{
        id:(new Date()).getTime(),
        categoryName
      }     
    })
setAddBtn(false)
openNotificationWithIcon('success','Success','category added successfully',false)
  
  }

}  //called on save data click
const updateData=()=>{
  if(validateCat()){
  dispatch({
    type:'UPDATE Category',
    payload:{
      id:editObj.id,
      categoryName
    }     
  })
setAddBtn(false)
  }
}//called on save button click of edit
const editClick=(params)=>{
  
  setAddBtn(true)
  setEditObj(params)
  setCategoryName(params.categoryName)
}//called on edit btn click
const deleteClick=(params)=>{
  setEditObj(params)
  dispatch({
    type:'DELETE Category',
    payload:{
      id:editObj.id
    }     
  })
   openNotificationWithIcon('error','Success','category deleted successfully',false)
} //called on delete btn click
    return (
        <div>
            <div className="text-center bg-secondary p-2 mx-5 mt-4">
              <h3>Category List</h3>
             </div>
          {addBtn&&(
  <div
  className={
    "shadowDefined py-5 pt-4 pb-2 my-2 p-3 " 
  }
>
  <div className="row" >
    <div className="col-sm-12 col-md-12 mb-3">
      <label
        className={
          localStorage.getItem("appTheme") === "dark"
            ? "textColorDark"
            : "textColorLight"
        }
      >
        Category Name <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Category Name"
        name="categoryName"
        value={categoryName}
        onChange={(e)=>setCategoryName(e.target.value)}
      />
    </div>

  </div>
  <div className="row my-3">
    <div className="col-sm-12 col-md-12 text-center">
      {editObj.id===undefined?(
  <ButtonComp //calling button component
  color='success'
  title='Save'
  onClick={saveData}
/>
      ):(
        <ButtonComp //calling button component
        color='success'
        title='Update'
        onClick={updateData}
      />
      )}
    
    </div>
  </div>
</div>
          )}
           
        <div className="mx-4"> 
        <DataTableComp //calling data table component
            columns={columns}
            data={categoryList}
        />
        </div>

        </div>
       
    );
};
export default CategoryComp;