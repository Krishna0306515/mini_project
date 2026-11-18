import { Bot, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Bot size={30} />
        <span>AgentFlow<span className="highlight">AI</span></span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#workflow">How It Works</a>
      </div>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="get-started">Get Started</button>
      </div>

      <Menu className="menu-icon" />

    </nav>
  );
}

export default Navbar;