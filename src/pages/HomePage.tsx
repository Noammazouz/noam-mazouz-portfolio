import Seo from "../components/Seo.tsx";
import { profile } from "../data/profile.ts";

export default function HomePage() {
  return (
    <>
      <Seo />
      <h1 className="container-page py-24 text-mega font-semibold">{profile.name}</h1>
    </>
  );
}
