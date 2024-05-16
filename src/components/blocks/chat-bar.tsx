import { Send } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function ChatBar() {
  return (
    <Card>
      <form className="flex w-full">
        <div className="flex w-full items-center relative border border-slate-200 rounded-md">
          <Input
            className="w-full border-none ring-0"
            type="text"
            placeholder="Send en besked til Rasmus"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  type="submit"
                >
                  <Send className="text-slate-900" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Send besked</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </form>
    </Card>
  );
}
