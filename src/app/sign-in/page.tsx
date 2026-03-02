 "use client";
 import Image from "next/image";
 import { useRouter } from "next/navigation";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { useTranslation } from "react-i18next";
 
 
 export default function SignInPage() {
  const router = useRouter();
  const { t } = useTranslation();
   return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0b1e36] via-[#0b2749] to-[#071a2e] flex items-center justify-center px-4 overflow-hidden">
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 832,
          height: 745.55,
          top: -271.27,
          left: 903.67,
          backgroundColor: "#007AFF4D",
          filter: "blur(650px)",
          mixBlendMode: "plus-lighter",
        }}
      />
      <div className="w-[532px] space-y-14">
        <div className="flex items-center justify-center">
          <Image src="/SAFIRA-LOGO.png" alt="Safira Logo" width={383} height={56} />
        </div>
        <h1 className="text-3xl text-white font-bold text-center">{t("auth.signin.title")}</h1>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <div className="">
            <Label htmlFor="email">{t("auth.signin.email")}</Label>
            <Input id="email" type="email" placeholder={t("auth.signin.email_placeholder")} />
           </div>
          <div className="">
            <Label htmlFor="password">{t("auth.signin.password")}</Label>
            <Input id="password" type="password" placeholder={t("auth.signin.password_placeholder")} />
           </div>
           <div className="pt-2">
            <Button type="submit" className="w-full gap-3">
              <span>{t("auth.signin.submit")}</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#0b2749]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Button>
           </div>
         </form>
       </div>
     </div>
   );
 }
