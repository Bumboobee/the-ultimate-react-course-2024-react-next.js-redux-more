import { useEffect, useState, useContext } from "react";
import TravelItemContext from "../context/travelItemContext";

const PermissionMessage = () => {
  const { cookiesAllowed, cookiesDecline, handleCookiesPermission } =
    useContext(TravelItemContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return cookiesAllowed ? null : (
    <div
      className={`bg-blue-100 fixed w-72 p-4 rounded-xl bottom-2 right-2 
        ${animate ? "slide-in" : "hidden"} ${cookiesDecline ? "hidden" : ""}`}
    >
      <div>
        <p className="text-xs mb-5 text-black">
          Usamos cookies para melhorar sua experiência em nosso site. Ao usar
          nosso site, você consente com os cookies.{" "}
          <a
            className="text-black font-bold hover:underline hover:text-black transition ease-out cursor-pointer"
            href="https://goadopt.io/blog/cookies-e-lgpd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba mais
          </a>
        </p>

        <div className="flex flex-col gap-3">
          <button
            className="text-xs text-white rounded-sm bg-black"
            onClick={() => handleCookiesPermission(true)}
          >
            Permitir Cookies
          </button>

          <button
            className="text-xs text-black bg-transparent border-black rounded-sm"
            onClick={() => handleCookiesPermission(false)}
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionMessage;
