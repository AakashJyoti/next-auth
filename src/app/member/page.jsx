import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default function MemberPage() {
  const session = getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div>
      <h1>Member Server session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.roll}</p>
    </div>
  );
}
