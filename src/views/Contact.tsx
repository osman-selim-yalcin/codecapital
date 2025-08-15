// src/pages/Contact.tsx
export default function Contact() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">İletişim</h1>
        <p className="text-[#A9B1C3] mt-2 max-w-2xl">
          Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsin.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-medium">E-posta</h2>
          <a
            href="mailto:osman@example.com"
            className="text-[#6EE7F9] hover:underline"
          >
            osman@example.com
          </a>
        </div>

        <div>
          <h2 className="text-xl font-medium">GitHub</h2>
          <a
            href="https://github.com/kullaniciadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7F9] hover:underline"
          >
            github.com/kullaniciadi
          </a>
        </div>

        <div>
          <h2 className="text-xl font-medium">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/kullaniciadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7F9] hover:underline"
          >
            linkedin.com/in/kullaniciadi
          </a>
        </div>
      </div>
    </section>
  );
}
