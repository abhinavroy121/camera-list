import React from 'react'
import CameraTableDashboardLayout from '../../layout/CameraTableDashboardLayout'
import CameraTableDashboard from '../../components/userTable/CameraTableDashboard'

const DashboardPage = () => {
  return (
    <div>
      <CameraTableDashboardLayout>
       <CameraTableDashboard />
      </CameraTableDashboardLayout>
    </div>
  )
}

export default DashboardPage
