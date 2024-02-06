import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import config from '../../../../config'

const columns = [
  // { field: 'id', headerName: 'ที่', width: 40, disableColumnMenu: true,  headerAlign: 'center', },
  { field: 'project_id', headerName: 'รหัสโครงการ', width: 110, disableColumnMenu: true,  headerAlign: 'center', },
  { field: 'project', headerName: 'โครงการ', width: 300, disableColumnMenu: true,  headerAlign: 'center', },
  { field: 'category', headerName: 'หมวดโครงการ', width: 300, disableColumnMenu: true,  headerAlign: 'center', },
  { field: 'level', headerName: 'ระดับ', width: 100, disableColumnMenu: true, headerAlign: 'center',},
  { field: 'institution', headerName: 'สถาบัน', width: 260, disableColumnMenu: true, headerAlign: 'center', },

]

const ProjectList = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch(`${config.apiUrlPrefix}/projectList/`)
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div>
      <h2 className='content'>รายชื่อโครงการ</h2>
      <div style={{ height: 650 }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
    
        />
    </div>
        </div >
  )
}

export default ProjectList

