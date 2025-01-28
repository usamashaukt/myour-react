import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    
  }, []);

  return (
    <div className="preloader">
      <div className="box-1">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner">
              <div className="lines" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-2" />
    </div>
  );
};
export default Preloader;
