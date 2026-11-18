import {
  BrainCircuit,
  Workflow,
  Bot,
  ShieldCheck,
  BarChart3,
  RefreshCw
} from "lucide-react";

function Features() {

  const features = [
    {
      icon: <BrainCircuit />,
      title: "Intelligent Planning",
      description: "AI automatically understands user requests and creates execution plans."
    },
    {
      icon: <Bot />,
      title: "Multi-Agent System",
      description: "Multiple specialized AI agents collaborate to complete complex tasks."
    },
    {
      icon: <Workflow />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks using intelligent agent coordination."
    },
    {
      icon: <ShieldCheck />,
      title: "Quality Verification",
      description: "Review generated results and identify errors before final delivery."
    },
    {
      icon: <BarChart3 />,
      title: "Performance Monitoring",
      description: "Monitor agent activity and track workflow execution progress."
    },
    {
      icon: <RefreshCw />,
      title: "Self Correction",
      description: "Agents can revise outputs when quality checks identify problems."
    }
  ];

  return (
    <section className="features" id="features">

      <div className="section-heading">
        <span>POWERFUL CAPABILITIES</span>
        <h2>Everything You Need to Automate</h2>
        <p>Discover the intelligence behind AgentFlow AI.</p>
      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;