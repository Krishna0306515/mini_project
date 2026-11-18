import { ArrowRight, Bot, BrainCircuit, Workflow } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="badge">
          <Bot size={16} />
          Next Generation Agentic AI
        </div>

        <h1>
          Automate Your Work
          <br />
          With <span>Intelligent AI Agents</span>
        </h1>

        <p>
          AgentFlow AI is an intelligent multi-agent automation
          platform that plans, executes, analyzes and completes
          complex tasks automatically.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Building <ArrowRight size={18} />
          </button>

          <button className="secondary-btn">
            Explore Workflow
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <h2>05+</h2>
            <p>AI Agents</p>
          </div>

          <div>
            <h2>100%</h2>
            <p>Automated Workflow</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Task Execution</p>
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="ai-circle">
          <BrainCircuit size={65} />
          <h3>AgentFlow AI</h3>
          <p>AI Orchestration</p>
        </div>

        <div className="floating-card card-one">
          <Bot size={22} />
          <span>Planner Agent</span>
          <small>Planning...</small>
        </div>

        <div className="floating-card card-two">
          <Workflow size={22} />
          <span>Research Agent</span>
          <small>Working...</small>
        </div>

        <div className="floating-card card-three">
          <BrainCircuit size={22} />
          <span>Analysis Agent</span>
          <small>Analyzing...</small>
        </div>

      </div>

    </section>
  );
}

export default Hero;