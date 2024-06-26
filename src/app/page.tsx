import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[1024px] h-[100%] mx-auto px-10 pt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Supremo Tribunal Federal</h1>
        <Image src="/brazil.svg" width={100} height={100} alt="Brasil" />
      </div>
      <section className="text-justify mt-4">
        <p>
          O Supremo Tribunal Federal (STF) é a instância superior ou última
          instância do poder judiciário brasileiro; a que acumula tanto
          competências típicas de uma suprema corte, ou seja, um tribunal de
          última instância (popularmente conhecida como terceira instância),
          como as de um tribunal constitucional, ou seja, aquele que julga
          questões de constitucionalidade independentemente de litígios
          concretos.
        </p>
        <p>
          Sua função institucional fundamental é de servir como guardião da
          Constituição Federal de 1988, apreciando casos que envolvam lesão ou
          ameaça a suas provisões. De suas decisões não cabe recurso a nenhum
          outro tribunal.
        </p>
      </section>

      <section className="mt-8 text-justify">
        <p>
          Criado após a Independência do Brasil, como Supremo Tribunal de
          Justiça, e renomeado como Supremo Tribunal Federal após a proclamação
          da República, o STF exerce uma longa série de competências, entre as
          quais a mais conhecida e relevante é o controle concentrado de
          constitucionalidade por meio de ações diretas de
          inconstitucionalidade.
        </p>
        <p>
          Todas as reuniões administrativas e judiciais do Supremo Tribunal são
          transmitidas ao vivo pela TV Justiça desde 11 de agosto de 2002 e pela
          Rádio Justiça desde 5 maio de 2004. O Tribunal também está aberto para
          o público assistir aos julgamentos.
        </p>
      </section>
      <section className="mt-8 text-justify">
        <p>
          Os onze juízes do tribunal são chamados de Ministros, apesar de o
          cargo não ter nenhuma semelhança com os ministros do Poder Executivo.
          Eles são nomeados pelo Presidente da República, devendo ser aprovados
          pelo Senado Federal. Sem mandato fixo, o limite máximo é a
          aposentadoria compulsória, ao atingirem os 75 anos de idade.
        </p>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-2xl shadow-2xl"
            width={800}
            height={500}
            src={"/Supremo_Brasil.jpg"}
            alt="Supremo Tribunal Federal"
          />
        </div>
      </section>
      <section className="mt-20 mb-28 flex items-center justify-center">
        {/* put click event here */}
        <a
          target="_blank"
          href="https://pt.wikipedia.org/wiki/Supremo_Tribunal_Federal"
          className="block text-sky-500 border-current font-semibold dark:text-sky-400 text-2xl"
        >
          Saiba mais em Wikipédia
        </a>
      </section>
    </main>
  );
}
