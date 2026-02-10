import React from 'react';
import './CameraTable.css';
// import { updateStatus } from '../../api/userApi';
import disabledHealth from '../../assets/camerTableIcons/health/disabledHealth.svg';
import enabledHealth from '../../assets/camerTableIcons/health/enabledHealth.svg';
import deleteIcon from '../../assets/camerTableIcons/delete.svg';

const CameraTable = ({ data, allData, onDataUpdate }) => {
  
  const handleStatusToggle = async (id, currentStatus) => {
    const newStatus = currentStatus?.toLowerCase() === 'active' ? 'inactive' : 'active';
    
    // Update full dataset, not just current page
    onDataUpdate(allData.map(camera => 
      camera.id === id ? { ...camera, status: newStatus } : camera
    ));
    
 
    // try {
    //   const response = await updateStatus({id, status: newStatus});
    //   console.log("Status updated successfully", response);
    // } catch (error) {
    //   console.error("Failed to update status on backend:", error);
    //   // You could implement rollback logic here if needed
    // }
  };

  const handleRowSelect = (id) => {
    console.log("Selected camera:", id);
   
  };

  const handleDelete = (id) => {
    // Remove from full dataset, not just current page
    const updatedData = allData.filter(camera => camera.id !== id);
    onDataUpdate(updatedData);
  };
  
  return (
    <table className="camera-table">
      <thead>
        <tr>
          <th className="camera-checkbox">
            <input className="camera-row-checkbox" type="checkbox" onChange={(e) => {
              const allCheckboxes = document.querySelectorAll('.camera-row-checkbox');
              allCheckboxes.forEach(cb => cb.checked = e.target.checked);
            }} />
          </th>
          <th className="camera-name">Name</th>
          <th className="camera-health">Health</th>
          <th className="camera-location">Location</th>
          <th className="camera-recorder">Recorder</th>
          <th className="camera-tasks">Tasks</th>
          <th className="camera-status">Status</th>
          <th className="camera-actions">Action</th>
        </tr>
      </thead>
      <tbody>
        {data && data?.map(camera => (
          <tr key={camera.id} className="camera-row">
            <td className="camera-checkbox">
              <input 
                type="checkbox" 
                className="camera-row-checkbox"
                onChange={() => handleRowSelect(camera.id)}
              />
            </td>
            <td className="camera-name">
              <div className="camera-info">
               <span className="camera-health">

                 <span 
                className="health-indicator" 
                style={{ backgroundColor: camera.status === 'active' ? '#28a745' : '#dc3545' }}
                ></span>
               
                <span className="camera-name-text">{camera.name}</span>  </span>
                <span className="camera-email">sherwinwilliams@wobot.ai</span>
              </div>
            </td>
            <td className='health-activity'>
              <img src={camera?.status?.toLowerCase() === 'active' ? enabledHealth : disabledHealth} alt="" />
            </td>
            <td className="camera-location">{camera.location}</td>
            <td className="camera-recorder">{camera.model || 'N/A'}</td>
            <td className="camera-tasks">
             View Tasks
            </td>
            <td className="camera-status">
              <span className={`status-badge ${camera.status?.toLowerCase()}`}
              onClick={()=> handleStatusToggle(camera.id,camera.status)}
              >
                {camera.status}
              </span>
            </td>
            <td className="camera-actions">
              <img src={deleteIcon} alt="Delete" onClick={() => handleDelete(camera.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CameraTable;
