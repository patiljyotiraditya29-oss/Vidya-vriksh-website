import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", role: "visitor" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    if (form.name.length > 100 || form.email.length > 255 || form.message.length > 1000) {
      toast({ title: "Input too long", variant: "destructive" });
      return;
    }
    // In a real app this would POST to a backend
    setSubmitted(true);
    toast({ title: "Thank you!", description: "Your feedback has been received." });
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all";

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <span className="font-body text-sm font-semibold tracking-wider uppercase text-accent">Feedback</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="font-body text-lg text-muted-foreground">
            Your thoughts help us grow. Share your experience, suggestions, or words of encouragement.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle size={56} className="mx-auto text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Feedback Received!</h2>
            <p className="font-body text-muted-foreground">
              Thank you for taking the time to share your thoughts with us.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "", role: "visitor" }); }}
              className="mt-6 inline-flex items-center rounded-lg bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              Submit Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-6"
          >
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Your name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">I am a…</label>
              <select
                className={inputClass}
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                <option value="visitor">Visitor</option>
                <option value="volunteer">Volunteer</option>
                <option value="parent">Parent / Guardian</option>
                <option value="student">Student</option>
                <option value="donor">Donor</option>
              </select>
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">Your Message</label>
              <textarea
                className={inputClass + " min-h-[140px] resize-y"}
                placeholder="Share your feedback, suggestions, or experience…"
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">{form.message.length}/1000</p>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-body text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
            >
              Send Feedback <Send size={16} />
            </button>
          </motion.form>
        )}
      </div>
    </main>
  );
};

export default FeedbackPage;
