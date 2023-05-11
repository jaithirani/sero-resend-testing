import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

export function EmailTemplate({ body }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Text className="">Here are your tasks for the week!</Text>
          <Text className="">{body}</Text>
          <Button className="cursor-pointer rounded-md bg-blue-400 px-2 py-1 text-white hover:bg-blue-500">
            Click me
          </Button>
        </Body>
      </Tailwind>
    </Html>
  );
}
