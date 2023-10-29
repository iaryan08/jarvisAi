import OpenAI from "openai";

const openai = new OpenAI();

async function main(data) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: data }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return (completion.choices[0]);
}
export default main;