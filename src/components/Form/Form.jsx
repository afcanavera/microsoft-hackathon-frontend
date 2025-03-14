import pencile from "../../Assets/images/edit.png";
import arrow from "../../Assets/images/Arrow-right-circle.png";
import "./Form.scss";
import { Link } from "react-router-dom";
export default function Form() {
  return (
    <div className="Form__background">
      <main className="Form__main">
        <div className="Form__form">
          <h1 className="Form__title">
            Tell me how can I help you today?
          </h1>
          <form className="Form__field">
            <div className="Form__container1">
              <div className="Form__container-outer">
                <div className="Form__container-inner">
                  <label className="Form__label" htmlFor="">
                    What is your task?
                  </label>
                  <img src={pencile} alt="" className="Form__pencil" />
                </div>
                <textarea
                  className="Form__textarea area-style"
                  name="name"
                  id="name"
                ></textarea>
              </div>
              <div className="Form__container-outer">
                <div className="Form__container-inner">
                  <label className="Form__label" htmlFor="">
                    What software would you like me to use?
                  </label>
                  <img src={pencile} alt="" className="Form__pencil" />
                </div>
                <textarea
                  className="Form__textarea"
                  name="background"
                  id="background"
                ></textarea>
              </div>
            </div>
            <div className = "Form__container1">
            <div className="Form__container-outer">
              <div className="Form__container-inner">
                <label htmlFor="" className="Form__label">
                  What is your deadline?
                </label>
                <img src={pencile} alt="" className="Form__pencil" />
              </div>
              <textarea name="name" id="name" className="Form__textarea"></textarea>
            </div>
            <div className="Form__container-outer">
              <div className="Form__container-inner">
                <label htmlFor="" className="Form__label">
                  Any additional notes?
                </label>
                <img src={pencile} alt="" className="Form__pencil" />
              </div>
              <textarea
                name="name"
                id="name"
                className="Form__textarea"
                ></textarea>
            </div>
                </div>
          </form>
          <Link to="/workexample" className="Form__link">
            <button type="submit" className="Form__button">
              I'm ready! 
              <img src={arrow} alt="" className="Form__button--arrow" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
