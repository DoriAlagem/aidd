import Image from "next/image";

export default function SocialLinks({
  size = 32,
  dim = false,
}: {
  size?: number;
  dim?: boolean;
}) {
  const dimCls = dim ? " opacity-60" : "";

  return (
    <>
      <a
        href="https://github.com/DoriAlagem"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:opacity-70 transition-opacity flex items-center justify-center${dimCls}`}
      >
        <Image
          src="/github.svg"
          alt="GitHub"
          width={size}
          height={size}
          className="invert brightness-0"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/dor-alagem"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:opacity-70 transition-opacity flex items-center justify-center${dimCls}`}
      >
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={size}
          height={size}
          className="invert brightness-0"
        />
      </a>
    </>
  );
}