import "../../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      <div className="container">
        <ul>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <i class="fa-brands fa-instagram" ></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="https://www.tiktok.com" target="_blank">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
        </ul>
        <p>Copyrights &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
