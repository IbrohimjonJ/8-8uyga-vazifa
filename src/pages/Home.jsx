import { useState } from "react";
import { useSelector } from "react-redux";



function Home() {
  const { user } = useSelector((state) => state.user);
  const [data, setdata] = useState(false);
  console.log(user);
  return (
    <div className="mx-20 mt-10">
      <div>
        {user ? (
          <div>
            
            <div className="">
            <div className="card glass w-full text-center">
               
                <figure>
                 
                </figure>
                <div className="card-body text-center"> 
                <div className="card glass w-96">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full place-items-center">
            <h1 className="text-9xl text-slate-200 place-items-center justify-center m-auto top-40 absolute left-[450px]">
              No recipe
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;


