import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@hooks/useAuth'
import { Disclosure } from '@headlessui/react'

const DisclousureBottomButtons = () => {
    const router = useRouter()
    const { userId, signOut } = useAuth()
    return (
        <div className="mt-3 space-y-1">
            <Disclosure.Button
            onClick={() => router.push(`/dashboard/home/${userId}`)}
                className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
            >
                Dashboard
            </Disclosure.Button>
            <Disclosure.Button
            onClick={() => router.push(`/user/${userId}`)}
                className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
            >
                Configuración
            </Disclosure.Button>
            <Disclosure.Button
            onClick={() => signOut()}
                className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
            >
                Cerrar sesión
            </Disclosure.Button>
        </div>
    )
}

export default DisclousureBottomButtons