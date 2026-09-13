import Icon from "./ui/Icon";
export default function Footer() {
  return (
    <footer className="container footer">
      <span>© {new Date().getFullYear()} Gerald Adli</span>
      <span className="footer-note">Always learning. Always building.</span>
      <a href="#home">
        Back to top <Icon name="arrow" />
      </a>
    </footer>
  );
}
