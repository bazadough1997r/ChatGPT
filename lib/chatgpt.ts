import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default openai;
