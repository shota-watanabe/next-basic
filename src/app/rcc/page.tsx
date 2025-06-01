"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // from "next/router"はPageRouterなので使わない
import Link from "next/link"; // ページ遷移先を事前にプリフェッチし高速化

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter(); // イベントと組み合わせるとき

  console.log("Client");
  return (
    <div>
      Client
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Link href="/about">About</Link>
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  );
}
