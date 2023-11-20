import Link from "next/link";

export default function Nav() {
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
        </div>
      </nav>
    </header>
  );
}
