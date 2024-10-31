import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const TotalClass = () => {

  const [allClasses, setAllClasses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(7)
  const [count, setCount] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch('http://localhost:4000/coursesCount')
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
      })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/courses?page=${currentPage}&size=${itemsPerPage}`)
      .then(res => res.json())
      .then(data => setAllClasses(data))
  }, [currentPage, itemsPerPage]);


  // const { data: allClasses } = useQuery({
  //   queryKey: ['courses'],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get('courses')
  //     console.log(res.data);
  //     return res.data
  //   }
  // })

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];


  const handleItemsPerPage = e => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value)
    setCurrentPage(0)
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }



  return (
    <div className="my-10">
      <h3 className="text-3xl text-center font-bold text-red-500">Total Class :  {allClasses?.length}</h3>

      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold">
              <th></th>
              <th>Course Name</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            <>
              {
                allClasses?.map((classes, i) => <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={classes?.image_url}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classes?.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{classes?.rating}</td>
                  <td>{classes?.category}</td>
                  <td>{classes?.enrollment}</td>
                </tr>
                )

              }
            </>
          </tbody>

        </table>

        {/* Pagination */}

        <div className='pagination text-center my-20 mr-5'>
          <button className="mr-5 btn bg-red-600 text-white hover:btn-outline" onClick={handlePrevPage}>Prev</button>
          {
            pages.map(page => <button
              className={`mr-5 ${currentPage === page ? 'selected text-indigo-700 font-bold btn-outline  join-item btn btn-square' : undefined}`}
              key={page}
              onClick={() => setCurrentPage(page)}
            >{page + 1}</button>)
          }
          <button className="mr-5 btn bg-red-600 text-white hover:btn-outline" onClick={handleNextPage}>Next</button>
          {/* <p><select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select></p> */}
        </div>

      </div>

    </div>
  );
};

export default TotalClass;

{/* <div className="join">
  <input
    className="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
    defaultChecked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div> */}