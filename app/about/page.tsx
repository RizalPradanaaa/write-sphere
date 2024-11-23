import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-4/5 md:w-3/4 font-bold flex-wrap md:flex-nowrap mt-8 md:mt-4 md:mb-20 mr-12 md:mr-28 lg:mr-48">
        <h1 className="text-xl font-bold text-center md:text-2xl md:mt-32">
            Tentang WriteSphere
        </h1>
        <blockquote className="mt-4 text-slate-600 w-full md:w-3/4 text-justify text-md md:text-lg md:border-l-2 pl-6 italic">
        "Selamat datang di WriteSphere dunia untuk penulis dan pembaca yang ingin berbagi pandangan, cerita, dan ide. Di sini, setiap kata memiliki tempat untuk berkembang, dan setiap pendapat dihargai. Kami menghubungkan penulis dengan pembaca yang antusias, menciptakan ruang untuk diskusi yang penuh makna."
        <br />
        <br />
        "WriteSphere adalah platform tempat penulis dari berbagai latar belakang dapat mengekspresikan diri melalui tulisan, sementara pembaca dapat memberikan tanggapan, komentar, dan wawasan mereka. Kami percaya bahwa setiap tulisan memiliki potensi untuk memicu percakapan yang membangun dan memberi inspirasi."
        </blockquote>
    </div>
  )
}
