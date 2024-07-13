import FadeLoader from "react-spinners/FadeLoader";

import { useState } from "react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {

    const [loading,setLoading] = useState()
    let [color, setColor] = useState("black");
  return (
    <div>

<div className="sweet-loading w-full h-screen flex justify-center items-center">
  

      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  )
}

export default Spinner