
import Link from 'next/link'
 function Nav() {
  return (
    <nav className="sticky  top-0 z-7 backdrop-blur-xl  ">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-5xl text-white font-semibold"><Link href='/'>🤖</Link> </span>
      <div className="flex space-x-4 text-white">
      <Link href="/topic/dashboard">Dashboard</Link>
        <Link  href="#">Documentation</Link>
        <Link className=' hidden md:block ' href="#">Contact</Link>
        <button className="relative   overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav