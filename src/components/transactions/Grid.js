import React from 'react';
// import { client } from '@lib/sanityClient';

const Grid = ({ result, contractAddress }) => {
    // const [projects, setProjects] = useState([]);

    // let queryStart = 0;
    // let queryEnd = 10;

    // const fetchProjects = async (SanityClient = client) => {
    //     const query = `*[_type == "projects"][${queryStart}..${queryEnd}] {
    //         "id": _id,
    //         "name": projectName,
    //         "product": product {
    //             _key,
    //         },
    //         users,
    //     }`;
    //     const projects = await SanityClient.fetch(query);
    //     setProjects(projects);

    // };
    // useEffect(() => {
    //     fetchProjects();
    // }, []);

    // console.log(projects);

    // const filteredProject = projects.filter((project) => {
    //     //if no input the return the original
    //     if (input === '') {
    //         return project;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return project.name.toLowerCase().includes(input.toLowerCase());
    //     }
    // });

    return (
        <>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center mt-8">
                {result.map((res, index) => (
                    // <Link href={`/transactions/${project.id}`} key={index} >
                    <button className="w-72 h-36 border-2 rounded-lg flex flex-col justify-evenly pl-4 hover:bg-gray-200" key={index} onClick={() => {}}>
                        {/* <div className="text-gray-900 font-medium inline-block">
                            Proyecto: <span className="font-normal">{project.name}</span>
                        </div>
                        <div className="text-gray-900 font-medium inline-block">
                            Producto: <span className="font-normal">{project.product._key}</span>
                        </div>
                        <div className="text-gray-900 font-medium inline-block">
                            ID: <span className="font-normal">{project.id}</span>
                        </div> */}
                        <div className="text-gray-900 font-medium inline-block">
                            Proyecto: <span className="font-normal">cow-test</span>
                        </div>
                        <div className="text-gray-900 font-medium inline-block">
                            Producto: <span className="font-normal">{res}</span>
                        </div>
                        <div className="text-gray-900 font-medium inline-block">
                            ID: <span className="font-normal">{contractAddress.slice(0, 10)}...</span>
                        </div>
                    </button>
                    // </Link>
                ))}
            </div>
        </>
    );
};
export default Grid;
