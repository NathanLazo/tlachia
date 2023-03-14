import React from 'react'
import Dashboard from '@containers/dashboard/Home/DashboardHome'
import { useAuth } from '@hooks/useAuth'

export default function DashboardIndex() {
    const { authPassed } = useAuth()

    return  (
    authPassed
    ?
        <Dashboard />
        
    :
        <></>
    )
}