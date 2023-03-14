import React, { useState, useEffect } from 'react';

import ModalFormCreate from './ModalFormCreate';
import ModalFormUpdate from './ModalFormUpdate';
import ModalFormDelete from './ModalFormDelete';

import MainTable from './MainTable';
import AdminProjectUsers from './AdminProjectUsers';

import { client } from '@lib/sanityClient';

const MainContent = ({ userId, selected }) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async (SanityClient = client) => {
        const query = `*[_type == "projects" && users[]._ref match "${userId}"] {
            _id,
            "name": projectName,
            "product": product {
                _key,
            },
            users,
        }`;
        const projects = await SanityClient.fetch(query);
        setProjects(projects);
    };
    useEffect(() => {
        fetchProjects();
    }, []);


    const HandleEdit = async (e, projectId, projectName) => {
        e.preventDefault();
        setOpenEditModal(true);
        setSelectedProjectId(projectId);
        setSelectedProjectName(projectName);
    };

    const handleDelete = async (e, projectId, projectName) => {
        e.preventDefault();
        setOpenDeleteModal(true);
        setSelectedProjectId(projectId);
        setSelectedProjectName(projectName);
    };

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [selectedProjectName, setSelectedProjectName] = useState('');

    if (selected == 0) {
        return (
            <>
                <ModalFormCreate openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal} userId={userId} fetchProjects={fetchProjects} />
                <ModalFormUpdate openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} projectId={selectedProjectId} projectName={selectedProjectName} />
                <ModalFormDelete openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} projectId={selectedProjectId} projectName={selectedProjectName} />
                <MainTable projects={projects} setOpenCreateModal={setOpenCreateModal} HandleEdit={HandleEdit} handleDelete={handleDelete} />
            </>
        );
    } else if (selected == 1) {
        return (
        <>
        <AdminProjectUsers projects={projects} />
        </>
        );
    } else if (selected == 2) {
        return <>Coming soon...</>;
    } else if (selected == 3) {
        return <>Coming soon...</>;
    }
};

export default MainContent;
