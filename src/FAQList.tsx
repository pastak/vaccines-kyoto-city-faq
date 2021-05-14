import { useMemo } from "react"
import { faqParser } from './lib/parser';
import { faqData } from './data';
import './FAQList.css';

export const FAQList: React.VFC = () => {
  const parsedData = useMemo(() => faqParser(faqData), []);

  return <>
    {
      parsedData.map(([question, answer], i) => {
        const index = i + 1;
        const id = `faq-${index}`;
        return <section
          key={`faq-${index}`} className='faq' id={id}
        >
          <h3>{`Q${index}: ${question}`}<a href={`#${id}`} title="このセクションへのリンク" aria-label="このセクションへのリンク">#</a></h3>
          <p dangerouslySetInnerHTML={answer}></p>
        </section>;
      })
    }
  </>
}
