import avatar from "../../Assets/images/user4.png";
import pencile from "../../Assets/images/edit.png";
import logo from "../../Assets/images/logo.png";
import arrow from "../../Assets/images/Arrow-right-circle.png";
import "./Form.scss";
export default function Form() {
  return (
    <div className="Form__background">
        <div className="Form__logo">
          <img src={logo} alt="" className="Form__logo--image"/>
          <h1 className="Form__logo--text">Autopilot</h1>
        </div>
      <main className="Form__main">
        <div className="Form__user">
          <img src={avatar} alt="" className="Form__user-avatar" />
          <div className="Form__user-info">
            <h2 className="Form__user-name">Chatbot's name</h2>
            <h2 className="Form__user-email">Chatbot@gmail.com</h2>
          </div>
        </div>
        <div className="Form__form">
          <h1 className="Form__title">
            Tell me about yourself and what would you like to do?
          </h1>
          <form className="Form__field">
            <div className="Form__container1">
              <div className="Form__container-outer">
                <div className="Form__container-inner">
                  <label className="Form__label" htmlFor="">
                    What is your name?
                  </label>
                  <img src={pencile} alt="" className="Form__pencil" />
                </div>
                <textarea
                  className="Form__textarea"
                  name="name"
                  id="name"
                ></textarea>
              </div>
              <div className="Form__container-outer">
                <div className="Form__container-inner">
                  <label className="Form__label" htmlFor="">
                    What is your background?
                  </label>
                  <img src={pencile} alt="" className="Form__pencil" />
                </div>
                <textarea
                  className="Form__textarea"
                  name="background"
                  id="background"
                ></textarea>
              </div>
              <div className="Form__container-outer ">
                <div className="Form__container-inner">
                  <label className="Form__label" htmlFor="">
                    What type of work do you want to do?
                  </label>
                  <img src={pencile} alt="" className="Form__pencil" />
                </div>
                <textarea
                  className="Form__textarea"
                  name="name"
                  id="name"
                ></textarea>
              </div>
            </div>
            <div className = "Form__container1">
            <div className="Form__container-outer">
              <div className="Form__container-inner">
                <label htmlFor="" className="Form__label">
                  What format would you like?
                </label>
                <img src={pencile} alt="" className="Form__pencil" />
              </div>
              <textarea name="name" id="name" className="Form__textarea"></textarea>
            </div>
            <div className="Form__container-outer">
              <div className="Form__container-inner">
                <label htmlFor="" className="Form__label">
                  When is your deadline?
                </label>
                <img src={pencile} alt="" className="Form__pencil" />
              </div>
              <textarea
                name="name"
                id="name"
                className="Form__textarea"
                ></textarea>
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
            <button type="submit" className="Form__button">
              I'm ready! 
              <img src={arrow} alt="" className="Form__button--arrow" />
            </button>
        </div>
      </main>
    </div>
  );
}
