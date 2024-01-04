"use client";

import { BiMailSend } from "react-icons/bi";
import { Input } from "./Input";
import { Textarea } from "./TextArea";
import { FormEvent, useEffect, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";
import { CgSpinnerAlt } from "react-icons/cg";

interface Message {
  type: "error" | "success";
  message: string;
}

export function Forms() {
  const [message, setMessage] = useState<Message>({
    type: "error",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  async function sendEmailBridge(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (isLoading) return;

    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      message: formData.get("message") as string
    };

    if (!data.user_name || !data.user_email || !data.message) {
      return setMessage({ type: "error", message: "Preencha todos os campos" });
    }

    setIsLoading(true);

    const response = await emailjs.send(
      String(process.env["NEXT_PUBLIC_EMAILJS_SERVICE_ID"]),
      String(process.env["NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"]),
      data,
      String(process.env["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY"])
    );

    setIsLoading(false);

    if (response.text === "OK") {
      setMessage({ type: "success", message: "Email enviado com sucesso!" });
    }
  }

  useEffect(() => {
    let timeout: null | NodeJS.Timeout = null;
    if (message.message) {
      timeout = setTimeout(() => {
        setMessage(prev => ({ ...prev, message: "" }));
      }, 5000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [message.message]);

  return (
    <form onSubmit={sendEmailBridge} className="flex flex-col gap-4 mt-14">
      <Input placeholder="nome" name="user_name" />

      <Input placeholder="E-mail" name="user_email" />

      <Textarea placeholder="Mensagem" name="message" />

      <button 
        className={twJoin(`py-2 px-5 border-2 rounded-md flex items-center justify-center
          w-max text-[rgb(255,255,255,0.55)] border-[rgb(255,255,255,0.55)] self-end
        hover:text-[rgb(255,255,255,0.75)] hover:border-[rgb(255,255,255,0.75)] gap-2`,
          isLoading && "cursor-not-allowed"
        )}
        disabled={isLoading}
      >
        {isLoading ? (
            <CgSpinnerAlt className="text-xl animate-spin" />
          ) : (
            <BiMailSend className="text-xl" />
        )}
        <span className="relative text-sm">Enviar Mensagem</span>
      </button>

      <div className={twMerge(
        "text-red-500 text-center",
        message.type === "success" && "text-green-500"
      )}>
        {message.message}
      </div>
    </form>
  );
}