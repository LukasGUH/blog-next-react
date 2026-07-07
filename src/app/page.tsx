import { SpinLoader } from "@/components/SpinLoader";

export default async function homePage() {

  return (
    <div>
      <SpinLoader containerClasses="min-h-40" />
    </div>
  )
}