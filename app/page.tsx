export default function Home() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-neutral-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Comece o ano com planejamento, clareza e decisões estratégicas.
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Um café estratégico para mulheres empresárias e empreendedoras que desejam
          iniciar o ano com direção, visão e conexões que fazem sentido.
        </p>

        <a
          href="#inscricao"
          className="inline-block mt-10 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
        >
          Quero participar do Café Estratégico do Hope Clube
        </a>
      </section>

      {/* DOR */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Você não precisa começar o ano no improviso.
        </h2>

        <p className="text-lg leading-relaxed">
          O início do ano costuma chegar cheio de expectativas, mas sem planejamento claro.
          Muitas mulheres líderes acabam reagindo às demandas, em vez de conduzir o próprio caminho.
          <br /><br />
          O Café Estratégico do Hope Clube é um convite para pausar, organizar ideias e iniciar
          o ano com intencionalidade.
        </p>
      </section>

      {/* O QUE É */}
      <section className="bg-neutral-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Um café para quem empreende e decide.
          </h2>

          <p className="text-lg mb-10">
            Mais do que um encontro social, este é um café da manhã estratégico,
            pensado para mulheres que desejam alinhar visão, planejamento e propósito.
          </p>

          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li>✔ Planejamento de início de ano</li>
            <li>✔ Troca real entre mulheres que empreendem</li>
            <li>✔ Networking com intenção</li>
            <li>✔ Ambiente seguro, leve e estratégico</li>
          </ul>
        </div>
      </section>

      {/* O QUE VOCÊ VAI CONSTRUIR */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          O que você vai levar desse café:
        </h2>

        <ul className="space-y-4 text-lg">
          <li>☕ Clareza para planejar o ano</li>
          <li>📌 Organização de prioridades</li>
          <li>💡 Novas perspectivas para decisões de negócio</li>
          <li>🤝 Conexões com mulheres que compartilham desafios semelhantes</li>
          <li>✨ Inspiração com direcionamento prático</li>
        </ul>
      </section>

      {/* METODOLOGIA */}
      <section className="bg-neutral-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Planejamento acessível e realista.
          </h2>

          <p className="text-lg leading-relaxed">
            Não é preciso experiência, formação específica ou negócio estruturado.
            O encontro é conduzido de forma leve e prática, para que cada mulher consiga
            refletir, organizar ideias e sair com mais clareza sobre os próximos passos.
          </p>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Esse encontro é para você que:
        </h2>

        <ul className="space-y-3 text-lg">
          <li>✔ É empresária, empreendedora ou autônoma</li>
          <li>✔ Está no início do negócio ou em fase de crescimento</li>
          <li>✔ Quer planejar o ano com mais estratégia</li>
          <li>✔ Valoriza conexões verdadeiras</li>
          <li>✔ Deseja crescer sem perder propósito</li>
        </ul>
      </section>

      {/* INFORMAÇÕES */}
      <section id="inscricao" className="bg-primary text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 text-lg">
          <p>📅 <strong>Data:</strong> 13 de Janeiro</p>
          <p>⏰ <strong>Horário:</strong> 8h30</p>
          <p>☕ <strong>Formato:</strong> Café da manhã estratégico presencial</p>
          <p>📍 <strong>Local:</strong> Espaço Hope – Av. das Américas, 12.600 – Sala 104</p>
          <p>🎟 <strong>Vagas limitadas</strong></p>

          <a
            href="#"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-full font-semibold"
          >
            Confirmar minha vaga no Café Estratégico do Hope Clube
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Dúvidas Frequentes</h2>

        <div className="space-y-6 text-lg">
          <p><strong>Preciso ter um negócio estruturado?</strong><br />Não. Basta o desejo de planejar.</p>
          <p><strong>Preciso levar material?</strong><br />Não é necessário.</p>
          <p><strong>É apenas inspiracional?</strong><br />Não. O foco é planejamento e clareza.</p>
          <p><strong>Posso participar mesmo no início?</strong><br />Sim. Planejar desde o início acelera decisões.</p>
        </div>
      </section>

      {/* MEMBRESIA */}
      <section className="bg-neutral-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Esse café pode ser o início de algo maior.
          </h2>

          <p className="text-lg">
            Ao final do encontro, todas as participantes poderão se tornar membros do Hope Clube,
            participando de todos os cafés estratégicos ao longo de 2026.
            <br /><br />
            ✨ Este café pode — e deve — fazer parte da sua agenda mensal.
          </p>
        </div>
      </section>

      {/* FINAL */}
      <footer className="py-20 px-6 text-center max-w-3xl mx-auto">
        <p className="text-2xl font-semibold">
          Todo crescimento começa com uma decisão.
          <br />
          E grandes decisões podem começar com um café.
        </p>
      </footer>

    </main>
  );
}
