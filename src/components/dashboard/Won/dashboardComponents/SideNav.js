import React from 'react'

const SideNav = ({
    sidebarNavigation,
    classNames,
    handleFieldState,
}) => {
    return (
        <div className="relative w-20 flex flex-col p-3 space-y-3">
            {sidebarNavigation?.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                        'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                    )}
                    onClick={() => handleFieldState(item.id)}
                >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
        </div>
    )
}

export default SideNav