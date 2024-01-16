"use client";
import Splashscreen from "@/components/Splashscreen/Splashscreen";
import HomePage from "@/components/home/HomePage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/home");
    }, 2400);
  }, []);

  return <>{loading && <Splashscreen />}</>;
}
