const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 text-center font-medium text-sm">
      <div>
        <p>
          Copyright © {year} - All right reserved by{" "}
          <strong>Vacation Go</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
