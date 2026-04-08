import { Zap, TrendingUp, Shield } from "lucide-react";

export default function OurFeatures() {
  const features = [
    { 
      icon: <Zap size={40} />,
      title: "Premium Quality", 
      desc: "Durable equipment tested for performance and longevity." 
    },
    { 
      icon: <TrendingUp size={40} />,
      title: "Expert Guidance", 
      desc: "Get personalized recommendations from fitness experts." 
    },
    { 
      icon: <Shield size={40} />,
      title: "Guaranteed Support", 
      desc: "24/7 customer support and comprehensive warranty coverage." 
    },
  ];

  return (
    <section className="features-container">
      <h2>Why Choose FitHub?</h2>
      <p className="features-subtitle">We provide everything you need for your fitness success</p>
      <div className="features">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon-wrapper">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
