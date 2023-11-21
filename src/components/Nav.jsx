import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Nav() {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-white">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/createUser"}>Create User</Link>
          <Link href={"/clientMember"}>Client Member</Link>
          <Link href={"/member"}>Member Page</Link>
          <Link href={"/public"}>Public</Link>
          {session ? (
            <Link href={"/api/auth/signout?callbackUrl=/"}>Logout</Link>
          ) : (
            <Link href={"/api/auth/signin"}>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
