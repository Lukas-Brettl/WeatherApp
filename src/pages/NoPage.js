import image from "../images/404-error-design-with-angry-clou.png"
const NoPage = () => {
  return (
    <div style={{ background: "#0a243b", width: "100%", height: "100%" }} className="container-fluid d-flex justify-content-center align-items-center">
      <img src={image} alt="404">
      </img></div>
  )

};

export default NoPage;