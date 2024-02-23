import { chatbotPrompt } from "@/helpers/constants/chatbot-prompt";
import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from "@/lib/openai-stream";
import { MessageArraySchema } from "@/validators/message";

export async function POST(req: Request) {
  const { messages } = await req.json();


  const parsedMessages = MessageArraySchema.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((messages) => {
    return {
      role: messages.isUserMessage ? "user" : "system",
      content: messages.text,
    };
  });

  outboundMessages.unshift({
    role: "system",
    content: chatbotPrompt,
  });

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
