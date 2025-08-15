export default function Contact() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">İletişim</h1>
        <p className="text-[#A1A1AA] mt-2 max-w-2xl">
          Bize e-posta veya sosyal hesaplarımızdan ulaşabilirsin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded border border-[#1F1F22] bg-[#111113] p-5">
          <h2 className="text-xl font-medium">Osman Selim Yalçın</h2>
          <div className="mt-3 space-y-2">
            <a
              href="mailto:osman@example.com"
              className="block text-[#60A5FA] hover:underline"
            >
              osman@example.com
            </a>
            <a
              href="https://github.com/kullaniciadi"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#60A5FA] hover:underline"
            >
              github.com/kullaniciadi
            </a>
            <a
              href="https://www.linkedin.com/in/kullaniciadi"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#60A5FA] hover:underline"
            >
              linkedin.com/in/kullaniciadi
            </a>
          </div>
        </div>

        <div className="rounded border border-[#1F1F22] bg-[#111113] p-5">
          <h2 className="text-xl font-medium">Burak Mat</h2>
          <div className="mt-3 space-y-2">
            <a
              href="mailto:burak@example.com"
              className="block text-[#60A5FA] hover:underline"
            >
              burak@example.com
            </a>
            <a
              href="https://github.com/kullaniciadi2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#60A5FA] hover:underline"
            >
              github.com/kullaniciadi2
            </a>
            <a
              href="https://www.linkedin.com/in/kullaniciadi2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#60A5FA] hover:underline"
            >
              linkedin.com/in/kullaniciadi2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
