import "../../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3 className="footer-title">Chalet MCS Anglès</h3>
          <p className="footer-subtitle">
            13 Le Salvan Bas, 81260 Anglès, Tarn
          </p>
        </div>

        <div className="footer-right">
          <a href="tel:+33675489914" className="footer-phone">
            📞 Claudie : +33 6 75 48 99 14
          </a>
          <p className="footer-note">
            📖 Merci de laisser ce livret sur place
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;