import DataTable from 'react-data-table-component';
function DataTableComp(props) {
 
    return (
        //react data table component
        <DataTable
            columns={props.columns}
            data={props.data}
            pagination
        />
    );
};
export default DataTableComp;