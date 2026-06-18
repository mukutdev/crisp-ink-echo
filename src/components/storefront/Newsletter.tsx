import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-stone">Early Access</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          First look at every drop
        </h2>
        <p className="mt-4 text-base text-stone">
          Join the list for new releases, restocks, and members-only previews.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="h-12 flex-1 rounded-sm border border-hairline bg-paper px-4 text-sm text-ink placeholder:text-stone focus:border-ink focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-sm bg-ink px-7 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {done ? "Joined ✓" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-xs text-stone">
          By subscribing you agree to our Terms & Privacy Policy.
        </p>
      </Reveal>
    </section>
  );
}
