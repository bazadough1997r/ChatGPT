import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.2, // creative answers
      top_p: 0.9, // logical answers
      max_tokens: 500,
      frequency_penalty: 0, // idk what exactly its function
      presence_penalty: 0, // idk what exactly its function
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT wan unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
