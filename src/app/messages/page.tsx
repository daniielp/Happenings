import Image from "next/image";
import Link from "next/link";
import { users } from "~/data/users";
import { slugify } from "~/lib/utils";

export default function MessagesPage() {
  return (
    <section>
      <h1 className="font-semibold text-gray-900 hover:text-gray-600 text-2xl text-center mb-4">Beskeder</h1>
      <div className="grid items-center grid-cols-1 gap-4 w-96 mx-auto">
        {users.map((person, index) => (
          <div
            key={"message-card" + index}
            className="min-w-2xl relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <Image
                className="h-10 w-10 rounded-full"
                src={person.imageUrl}
                width={40}
                height={40}
                alt={person.name}
              />
            </div>
            <div className="min-w-0 flex-1">
              <Link href={`/messages/${slugify(person.name)}`} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="truncate text-sm text-gray-500">{person.role}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
