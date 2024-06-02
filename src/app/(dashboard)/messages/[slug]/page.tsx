import { ChatBar } from "~/components/blocks/chat-bar";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";

export default function MessagePage() {
  return (
    <div className="relative h-full flex flex-col">
      <section className="flex-1">
        <div className="grid grid-cols-12 gap-y-2">
          <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarFallback>RL</AvatarFallback>
              </Avatar>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>Tager du med til studiestartsfest?</div>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarFallback>RL</AvatarFallback>
              </Avatar>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>
                  Vi er et par stykker der regner med at tage med. Men kunne være fedt hvis vi kunne få endnu flere med.
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <Avatar>
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <div>Har i planer om forfest?</div>
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <Avatar>
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <div>
                  Har et par øl vi kan hygge med inden festen, hvis det skulle være.
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarFallback>RL</AvatarFallback>
              </Avatar>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>Det lyder godt. Jeg siger det til de andre!</div>
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <Avatar>
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <div>
                  Skal vi sige vi mødes 16:30?
                </div>
                <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                  Set
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarFallback>RL</AvatarFallback>
              </Avatar>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>
                  Det er en aftale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChatBar />
    </div>
  );
}
