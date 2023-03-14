import React from 'react'
import { useAuth } from '@hooks/useAuth'

const Wine = () => {
  const { authPassed } = useAuth()
  return  (
    authPassed
    ?
        <div>Wine</div>
        
    :
        <></>
    )
}

export default Wine