import React from 'react';
function Index() {
    const local = localStorage.getItem('TLACHIA_DASHBOARD_GANADO_POPOVER');
    if(local){
        return null;
    }

    const hidePopover = () => {
            document.getElementById('popover')?.classList.add('hidden');
            localStorage.setItem('TLACHIA_DASHBOARD_GANADO_POPOVER', 'true');
    };

    setTimeout(() => {
        document.getElementById('popover')?.classList.add('opacity-0');
        document.getElementById('popover')?.classList.add('-z-50');
    }, 5000);
    return (
        <>
            <button onClick={hidePopover}>
                <div id="popover" className="transition duration-150 ease-in-out absolute top-[.45rem] left-0 ml-16 w-1/2 sm:w-1/4 z-50">
                    <div className="w-full bg-red-100 rounded shadow-2xl">
                        <div className="relative rounded-t px-4 xl:px-8">
                            <svg
                                className="absolute -ml-5 -mb-10 left-0 bottom-0"
                                width="30px"
                                height="30px"
                                viewBox="0 0 9 16"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#ffe4e4">
                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                <polygon
                                                    id="Triangle"
                                                    transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                                                    points="4.5 57.5 12.5 66.5 -3.5 66.5"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="flex justify-between w-full h-full px-4 pt-3 pb-5">
                            <p className="font-semibold text-sm">Para volver atrás, da click aquí.</p>
                        </div>
                    </div>
                </div>
            </button>
        </>
    );
}
export default Index;
