import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-14 w-auto", priority = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Kingpin Auto Sales home">
      <Image
        src="/logo.png"
        alt="Kingpin Auto Sales — Where Quality Drives Trust"
        width={896}
        height={677}
        priority={priority}
        className={`object-contain ${className}`}
      />
    </Link>
  );
}
