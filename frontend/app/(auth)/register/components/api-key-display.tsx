"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ApiKeyDisplayProps {
  apiKey: string;
}

function ApiKeyDisplay({ apiKey }: ApiKeyDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
  };
  return (
    <div className="space-y-4 text-center">
      <p className="text-muted-foreground text-sm">
        🚨 Guarde bem sua API Key. Ela será exibida apenas uma vez.
      </p>

      <div className="relative">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="bg-muted hover:bg-muted/80 cursor-pointer rounded-md p-4 font-mono text-sm break-all transition"
          onClick={handleCopy}
        >
          {apiKey}
        </div>

        <motion.div
          className="text-muted-foreground absolute top-2 right-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Check size={16} className="text-green-500" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Copy size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <p className="text-sm font-medium">
        Agora use sua chave para acessar o sistema:
      </p>
      <Link href="/login">
        <Button className="w-full transition-colors hover:bg-blue-400 hover:text-white">
          Ir para login
        </Button>
      </Link>
    </div>
  );
}

export default ApiKeyDisplay;
