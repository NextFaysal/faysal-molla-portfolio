import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
const footerLinks = [
  {
    title: "Linkedin",
    link: "https://bd.linkedin.com/in/faysalbd"
  },
  {
    title: "GitHub",
    link: "#"
  },
  {
    title: "Facebook",
    link: "https://bd.linkedin.com/in/faysalbd"
  },
  {
    title: "Qospry",
    link: "https://qosprey.com/"
  },
]

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All right reserved Faysal Molla</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {
              footerLinks.map((item)=> (
                <a key={item.title} href={item.link} className='inline-flex items-center gap-1.5 hover:cursor-pointer'>
                  <span className='font-semibold'>{item.title}</span>
                  <ArrowUpRight className="size-4"/>
                </a>
              ))
            }
          </nav>
        </div>
      </div>
    </footer>
  );
};
