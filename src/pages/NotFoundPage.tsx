import { Link } from "react-router";
import Seo from "../components/Seo.tsx";

export default function NotFoundPage() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col justify-center gap-8 py-24">
      <Seo title="Not found" description="This page does not exist." />
      <p className="label">
        <span className="text-signal">404</span> / not found
      </p>
      <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
        <span className="font-mono text-mute">$ </span>cd ./this-page
        <br />
        <span className="text-mute">no such file or directory</span>
      </h1>
      <Link
        to="/"
        className="w-fit border border-paper px-5 py-3 font-mono text-sm transition-colors hover:bg-paper hover:text-ink"
      >
        cd ~ (back home)
      </Link>
    </section>
  );
}
