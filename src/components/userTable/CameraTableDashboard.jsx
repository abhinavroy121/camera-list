import React, { useState, useEffect, useMemo } from 'react'
import { getList } from '../../api/userApi';
import CameraTable from '../CameraTable/CameraTable';
import wobotLogo from '../../assets/wobotLogo.svg';
import './CameraTableDashboard.css';
import Searchbar from '../SearchFilter/search/Searchbar';
import LocationFilter from '../SearchFilter/filter/LocationFilter';
import StatusFilter from '../SearchFilter/filter/StatusFilter';
import Pagination from '../Pagination';

const CameraTableDashboard = () => {
    const [originalData, setOriginalData] = useState([]);
    const [allCameraData, setAllCameraData] = useState([]);
    const [cameraListData, setCameraListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
         const getUserList = async () => {
        try {
            const response = await getList();
            const data = response?.data?.cameras || [];
            setOriginalData(data);
            setAllCameraData(data);
            setCameraListData(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    getUserList();
    }, [])

    // Get unique locations for filter dropdown from original data
    const uniqueLocations = useMemo(() => {
        const locations = [...new Set(originalData.map(camera => camera.location).filter(Boolean))];
        return locations;
    }, [originalData]);

    // Calculate pagination
    // const totalItems = allCameraData.length;
    // const totalPages = Math.ceil(totalItems / pageSize);
    // const startIndex = (currentPage - 1) * pageSize;
    // const endIndex = startIndex + pageSize;
    // const paginatedData = allCameraData.slice(startIndex, endIndex);

    // Combined filtering and pagination logic
    useEffect(() => {
        let filtered = allCameraData;

        // Apply search filter
        if (searchInput) {
            filtered = filtered.filter((camera) =>
                Object.values(camera).some((value) =>
                    String(value).toLowerCase().includes(searchInput.toLowerCase())
                )
            );
        }

        // Apply location filter
        if (selectedLocation) {
            filtered = filtered.filter(camera => camera.location === selectedLocation);
        }

        // Apply status filter
        if (selectedStatus) {
            filtered = filtered.filter(camera => {
                const matches = camera.status?.toLowerCase() === selectedStatus.toLowerCase();
                return matches;
            });
        }

        // Apply pagination to filtered data
        const paginatedFiltered = filtered.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
        setCameraListData(paginatedFiltered);
    }, [searchInput, selectedLocation, selectedStatus, allCameraData, currentPage, pageSize]);

    // Validate page when data or filters change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let filtered = allCameraData;

        // Apply all active filters
        if (searchInput) {
            filtered = filtered.filter((camera) =>
                Object.values(camera).some((value) =>
                    String(value).toLowerCase().includes(searchInput.toLowerCase())
                )
            );
        }
        if (selectedLocation) {
            filtered = filtered.filter(camera => camera.location === selectedLocation);
        }
        if (selectedStatus) {
            filtered = filtered.filter(camera => 
                camera.status?.toLowerCase() === selectedStatus.toLowerCase()
            );
        }

        // Check if current page is still valid
        const totalFilteredPages = Math.max(1, Math.ceil(filtered.length / pageSize));
        if (currentPage > totalFilteredPages) {
            setCurrentPage(totalFilteredPages);
        }
    }, [allCameraData, searchInput, selectedLocation, selectedStatus, pageSize]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleDataUpdate = (updatedData) => {

        setAllCameraData(updatedData);
    };

    const handleSearch = (value) => {
        setSearchInput(value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        setCurrentPage(1); // Reset to first page when changing location filter
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setCurrentPage(1); // Reset to first page when changing status filter
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setCurrentPage(1); // Reset to first page
    };

    return (
        <div className="camera-list-dashboard">
          <img src={wobotLogo} alt="Wobot Logo" className="wobot-logo" />
           <div className="camera-list-dashboard-header">
            <span>
                <p className='camera-list-dashboard-title'>Cameras</p>
                <p className='camera-list-dashboard-description'>Manage your cameras here</p>
            </span>
  
                <Searchbar onSearch={handleSearch}/>
               
           </div>
            <div className="table-wrapper">
                <div className='filters-section'>
                     <LocationFilter onLocationChange={handleLocationChange} locations={uniqueLocations} />
                <StatusFilter onStatusChange={handleStatusChange} />
                </div>
              <CameraTable data={cameraListData} allData={allCameraData} onDataUpdate={handleDataUpdate} />
            </div>
            <Pagination 
              currentPage={currentPage}
              totalPages={Math.ceil(allCameraData.length / pageSize)}
              onPageChange={handlePageChange}
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
              totalItems={allCameraData.length}
              itemsPerPage={pageSize}
            />
        </div>
    )
}

export default CameraTableDashboard
