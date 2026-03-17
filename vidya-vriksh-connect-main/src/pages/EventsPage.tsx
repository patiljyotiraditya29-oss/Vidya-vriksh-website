import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  {
    title: "Digital Literacy Workshop",
    date: "April 12, 2026",
    time: "10:00 AM – 3:00 PM",
    location: "Zilla Parishad School, Nashik",
    description: "Hands-on training in basic computer skills, internet safety, and using digital tools for learning.",
    capacity: "50 students",
    status: "upcoming" as const,
  },
  {
    title: "Career Pathways Seminar",
    date: "April 26, 2026",
    time: "11:00 AM – 1:00 PM",
    location: "Community Hall, Satara",
    description: "Industry professionals share insights on careers in technology, healthcare, and skilled trades.",
    capacity: "80 students",
    status: "upcoming" as const,
  },
  {
    title: "Art & Communication Camp",
    date: "May 10–12, 2026",
    time: "Full Day",
    location: "Vidya Vriksh Center, Pune",
    description: "A 3-day camp focused on creative expression, public speaking, and confidence building.",
    capacity: "30 students",
    status: "upcoming" as const,
  },
  {
    title: "Science Fair for Rural Schools",
    date: "March 5, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Government School, Kolhapur",
    description: "Students showcased science projects and were mentored by engineering college students.",
    capacity: "100 students",
    status: "past" as const,
  },
  {
    title: "Financial Literacy for Teens",
    date: "February 18, 2026",
    time: "10:00 AM – 12:00 PM",
    location: "Community Library, Solapur",
    description: "Basic financial concepts including savings, budgeting, and the importance of education investment.",
    capacity: "40 students",
    status: "past" as const,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const EventsPage = () => {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-wider uppercase text-accent">
            Events & Workshops
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Learn, Grow, Transform
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From hands-on workshops to inspiring seminars, our events are designed to unlock the potential of every child.
          </p>
        </div>

        {/* Upcoming */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent inline-block" />
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-[var(--shadow-elevated)] transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                    Upcoming
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{event.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                <div className="space-y-2 font-body text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar size={14} className="text-primary" />{event.date}</div>
                  <div className="flex items-center gap-2"><Clock size={14} className="text-primary" />{event.time}</div>
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" />{event.location}</div>
                  <div className="flex items-center gap-2"><Users size={14} className="text-primary" />{event.capacity}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-muted-foreground inline-block" />
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {past.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl border border-border p-6 opacity-80"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{event.description}</p>
                <div className="flex flex-wrap gap-4 font-body text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} />{event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} />{event.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventsPage;
