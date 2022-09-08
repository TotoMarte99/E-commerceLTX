import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "yellow",
};

function Spinner() {
  let [loading] = useState(true);
  let [color] = useState();

  return (
    <div className="sweet-loading">
      <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
    </div>
  );
}

export default Spinner;