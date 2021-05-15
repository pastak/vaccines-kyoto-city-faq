type FAQ = Readonly<[question: string, answer: string]>;
export const faqParser = (faq: string): Readonly<FAQ[]> => {
  let lines = faq.split('\n');
  const result: FAQ[] = [];
  while (1) {
    const [q, a, ...arr] = lines;
    result.push([q, a]);
    lines = arr;
    if (arr.length === 0) break;
  } 
  return result;
}
