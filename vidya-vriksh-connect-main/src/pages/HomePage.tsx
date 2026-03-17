import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, MapPin, ArrowRight, Target, Lightbulb, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const stats = [
  { icon: Users, value: "5,000+", label: "Lives Impacted" },
  { icon: BookOpen, value: "120+", label: "Workshops Conducted" },
  { icon: Award, value: "35+", label: "Partner Institutions" },
  { icon: MapPin, value: "12", label: "Districts Covered" },
];

const pillars = [
  {
    icon: Target,
    title: "Skill Development",
    description: "Hands-on training in digital literacy, communication, and vocational skills for youth and adults alike.",
  },
  {
    icon: Lightbulb,
    title: "Career Awareness",
    description: "Exposing individuals to diverse career paths through mentorship, guest lectures, and industry visits.",
  },
  {
    icon: GraduationCap,
    title: "Education & Upskilling",
    description: "Supporting students with scholarships and helping adults gain new skills to become empowered citizens.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rural children studying under a tree"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 md:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-body text-sm font-semibold tracking-wider uppercase text-accent mb-4">
              Vidya Vriksh Foundation
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Nurturing Roots,{" "}
              <span className="text-accent">Growing Futures</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
              We empower children and adults from rural India with the skills, knowledge, and confidence they need to build bright careers and become skilled citizens of the nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-body text-sm font-bold text-accent-foreground transition-all hover:opacity-90"
              >
                Explore Events <ArrowRight size={16} />
              </Link>
              <Link
                to="/feedback"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-6 py-3 font-body text-sm font-bold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Share Feedback
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <stat.icon size={28} className="mx-auto mb-3 text-primary" />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="font-body text-sm font-semibold tracking-wider uppercase text-accent">Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Every individual deserves a window to the world
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Vidya Vriksh Foundation bridges the opportunity gap for rural communities by providing skill-based education, career counseling, and mentorship to children and adults. We believe that with the right guidance, every individual can become a skilled, empowered citizen and a changemaker.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="font-body text-sm font-semibold tracking-wider uppercase text-accent">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Three Pillars of Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background rounded-xl p-8 border border-border transition-shadow hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <pillar.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl p-10 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Be Part of the Change
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Whether you volunteer, donate, or spread the word — every action plants a seed of opportunity for individuals across rural India.
            </p>
            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-body text-sm font-bold text-accent-foreground transition-all hover:opacity-90"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
