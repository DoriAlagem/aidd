import CopyEmail from "@/components/CopyEmail";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full border-t border-line">
      <div className="max-w-[1160px] mx-auto px-6 py-5 flex items-center justify-between text-faint font-mono text-[13px]">
        <span>© {new Date().getFullYear()} Dor Alagem</span>
        <div className="flex gap-4">
          <CopyEmail size={20} dim />
          <SocialLinks size={20} dim />
        </div>
      </div>
    </footer>
  );
}
