import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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"
});

// Your code here

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();