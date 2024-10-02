export default function SectionHeader({title, subTitle, description}:{title: string, subTitle: string, description: string}) {
  return (
    <> 
    <div className="flex justify-center">
        <p className="uppercase text-center font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {title}
        </p>
        </div>
        <h2 className="md:text-5xl font-serif text-3xl text-center font-semibold mt-6">
          {subTitle}
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4">
          {description}
        </p>
    </>
  )
}
