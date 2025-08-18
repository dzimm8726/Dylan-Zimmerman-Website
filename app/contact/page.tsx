export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="text-zinc-300">Use the form or email me at dylanzimmerman8726@gmail.com.</p>

      <form action="https://formspree.io/f/xqaljynl" method="POST" className="space-y-4">
        {/* tells Formspree to return JSON*/}
        <input type="hidden" name="_format" value="plain" />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
        />

       
        <input type="hidden" name="_subject" value="New message from your portfolio" />
      

        <button type="submit" className="rounded-xl bg-zinc-100 px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-200">
          Send
        </button>
      </form>
    </div>
  );
}
