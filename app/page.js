import { run } from "./db";

export default function Home() {
  run().catch(console.dir);
  return <div>hi</div>;
}
