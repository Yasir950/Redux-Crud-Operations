import React, {  useState } from "react"; 
import DataTableComp from "../misc/dataTable/dataTableComp";
import { Link } from "react-router-dom";
import ButtonComp from "../misc/button/buttonComp";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { textValidation } from "../misc/validationComp/validationComp";
import { openNotificationWithIcon } from "../misc/toastComp";
function CategoryComp() {
  const categoryList = useSelector((state) => state.categoryList); //select category list from redux store
  const carList = useSelector((state) => state.carList);   //select carlist list from redux store
  const [categoryName, setCategoryName] = useState(
    categoryList[0].categoryName
  );  //inputField
  const [color, setColor] = useState(""); //inputField
  const [model, setModel] = useState(""); //inputField
  const [addBtn, setAddBtn] = useState(false); //flag for add button click
  const [editObj, setEditObj] = useState({});  //obj for edit click
  const dispatch = useDispatch();

  const columns = [
    {
      name: "Category Name",
      selector: (row) => row.categoryName,
      sortable: true,
    },
    {
      name: "Color",
      selector: (row) => row.color,
      sortable: true,
    },
    {
      name: "Model",
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: "Action",

      cell: (params) => (
        <div>
          <Link>
            &nbsp;
            <i
              className="fas fa-solid fa-plus text-success mx-1"
              onClick={() => addBtnClick(params)}
            />
          </Link>
          <Link>
            <i
              className="fas fa-edit text-primary"
              onClick={() => editClick(params)}
            />
          </Link>
          <Link>
            &nbsp;
            <i
              className="fas fa-trash text-danger"
              onClick={() => deleteClick(params)}
            />
          </Link>
        </div>
      ),

      // ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];  //columns for table
  const validateCar=()=>{
    if (
      textValidation("Category Name", categoryName)||
      textValidation("Color", color)||
      textValidation("Model", model)
       
    ) {
      return false;
    }else 
      return true;
   }
  const addBtnClick = () => {
    setCategoryName(categoryList[0].categoryName);
    setColor("");
    setModel("");
    setEditObj({});
    setAddBtn(true);
  }; //called on add btn click
  const saveData = () => {
    if(validateCar()){
    dispatch({
      type: "ADD Cars",
      payload: {
        id: new Date().getTime(),
        categoryName,
        color,
        model,
      },
    });

    setAddBtn(false);
openNotificationWithIcon('success','Success','Car Added Successfully',false)
  
  }
  }; //called on save data click
  const updateData = () => {
    if(validateCar()){
    dispatch({
      type: "UPDATE Cars",
      payload: {
        id: editObj.id,
        categoryName,
        color,
        model,
      },
    });
    setAddBtn(false);}
  }; //called on save button click of edit
  const editClick = (params) => {
    setAddBtn(true);
    setEditObj(params);
    setCategoryName(params.categoryName);
    setColor(params.color);
    setModel(params.model);
  }; //called on edit btn click
  const deleteClick = (params) => {
    setEditObj(params);
    dispatch({
      type: "DELETE Cars",
      payload: {
        id: editObj.id,
      },
    });
    openNotificationWithIcon('error','Success','Car Deleted Successfully',false)

  }; //called on delete btn click
  return (
    <div>
      <div className="text-center bg-secondary p-2 mx-5 mt-4">
        <h3>Cars List</h3>
      </div>
      {addBtn && (
        <div className={" py-5 pt-4 pb-2 my-2 p-3 "}>
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-3">
              <label>Category Name <span className="text-danger">*</span></label>
              <select
                className="form-select form-control"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                name="categoryName"
              >
                {categoryList.map((opti) => (
                  <option key={opti.categoryName} value={opti.categoryName}>
                    {opti.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-md-4 mb-3">
              <label>Color <span className="text-danger">*</span></label>
              <input
                className="form-select form-control"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                name="color"
              />
            </div>
            <div className="col-sm-12 col-md-4 mb-3">
              <label>Model <span className="text-danger">*</span></label>
              <input
                className="form-select form-control"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                name="model"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-12 col-md-12 text-center">
              {editObj.id === undefined ? (
                <ButtonComp color="success" title="Save" onClick={saveData} />
              ) : (
                <ButtonComp   //calling button component
                  color="success"
                  title="Update"
                  onClick={updateData}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mx-4">
        
        <DataTableComp //calling data table component
        columns={columns} data={carList} /> 
      </div>
    </div>
  );
}
export default CategoryComp;
