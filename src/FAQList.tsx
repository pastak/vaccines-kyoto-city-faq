import { useMemo } from "react"
import { faqParser } from './lib/parser';
import { faqData } from './data';

export const FAQList: React.VFC = () => {
  const parsedData = useMemo(() => faqParser(faqData), []);

  return <>
    {
      parsedData.map(([question, answer], i) => {
        const index = i + 1;
        return <section
          key={`faq-${index}`} className='faq' id={`faq-${index}`}
        >
          <h3>{`Q${index}: ${question}`}</h3>
          <p dangerouslySetInnerHTML={answer}></p>
        </section>;
      })
    }
  </>
}
