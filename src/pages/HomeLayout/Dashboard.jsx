

function Dashboard() {
  return (
    <>
      <div className="flex flex-1 basis-3/5 p-[1.2%]">
        <div className="flex flex-col flex-1  rounded-4 bg-dark-100 px-2 relative">
          <h1 className='text-letter-100 px-2 mt-2'>Dashboard</h1>
          <div className="loader absolute top-[45%] left-[45%]">
          </div>
        </div>
      </div>

      <div className="flex flex-1 basis-1/5 p-[1.2%]">
        <div className="flex flex-col flex-1  rounded-4 bg-dark-100 px-2">
          <h1 className='text-letter-100 px-2 mt-2'>Dashboard</h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard