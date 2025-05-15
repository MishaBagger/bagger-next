import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
    const session = await getServerSession(authConfig)
  return (
    <div>Profile of {session?.user?.name}
        {session?.user?.image && (<Image src={session?.user?.image} alt={session?.user?.name}/>)}
    </div>

  );
}