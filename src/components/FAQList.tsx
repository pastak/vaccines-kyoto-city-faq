import { parsedFaqData } from "./data";

export const FAQList: React.VFC = () => {
  return (
    <>
      {parsedFaqData.map(([question, answer], i) => {
        const index = i + 1;
        const id = `faq-${index}`;
        return (
          <section key={`faq-${index}`} className="faq" id={id}>
            <h3>
              {`Q${index}: ${question}`}
              <a
                href={`#${id}`}
                title="このセクションへのリンク"
                aria-label="このセクションへのリンク"
              >
                #
              </a>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: answer }}></p>
          </section>
        );
      })}
    </>
  );
};
