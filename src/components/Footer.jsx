import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          DevMatch Industries Ltd
        </p>
      </aside>
      <Link to={"/privacy_policy"}>Privacy Policy</Link>
      <Link to={"/refund_policy"}>Refund Policy</Link>
      <Link to={"/terms_service"}>Terms Of Service</Link>
    </footer>
  );
};

export default Footer;
