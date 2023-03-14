import React from 'react'
import Dashboard from '@containers/dashboard/Won/Dashboard'
import { useAuth } from '@hooks/useAuth'

export default function DashboardGanado() {
    const { authPassed } = useAuth()
    
    return  (
    authPassed
    ?
        <Dashboard />
        
    :
        <></>
    )
}