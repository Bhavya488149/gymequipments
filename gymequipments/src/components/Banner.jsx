import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(#000000a0, #000000a0), url('/images/gym.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-txt">
        <h1>Build Your Dream Home Gym</h1>
        <p>Professional fitness equipment at affordable prices</p>
        <div className="banner-buttons">
          <button className="btn btn-primary" onClick={() => navigate("/services")}>
            Shop Now
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/about") }>
            Get Info
          </button>
        </div>
      </div>
    </div>
  );
}
