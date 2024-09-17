import Logo from "@/components/Logo"
import Backdrop from "@/components/Backdrop"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <section className="h-dvh  flex flex-col items-center justify-center relative px-3">
      <div className="flex flex-col items-center justify-center h-full gap-y-16">
        <div className="flex flex-col ">
          <Logo />
        </div>
        <Socials />
      </div>
      <Backdrop />
    </section>
  )
}
