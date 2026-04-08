export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Header Section */}
        <header className='flex justify-between items-center mb-12'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg'>
              <span className='text-white font-bold text-sm'>{"{ }"}</span>
            </div>
            <h1 className='text-xl font-bold tracking-tight'>
              CodeLens<span className='text-indigo-600'>.</span>
            </h1>
          </div>
          <div className='text-xs font-semibold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm'>
            AI DETECTOR
          </div>
        </header>

        {/* Hero Title */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-slate-800 mb-3'>
            Deteksi Bahasa Pemrograman
          </h2>
          <p className='text-slate-500'>
            Identifikasi sintaks JavaScript, PHP, dan Python dalam hitungan
            detik.
          </p>
        </div>

        {/* Main Editor Card */}
        <div className='bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden'>
          {/* Editor Top Bar */}
          <div className='bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-slate-300' />
              <div className='w-3 h-3 rounded-full bg-slate-300' />
              <div className='w-3 h-3 rounded-full bg-slate-300' />
            </div>
            <span className='mx-auto text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]'>
              Source Code
            </span>
          </div>

          {/* Textarea Area */}
          <div className='p-2'>
            <textarea
              className='w-full h-64 p-6 font-mono text-sm text-slate-700 bg-transparent focus:outline-none resize-none placeholder:text-slate-300'
              placeholder='// Paste your code here...'></textarea>
          </div>

          {/* Action Footer */}
          <div className='p-6 bg-slate-50/50 border-t border-slate-100 flex justify-end'>
            <button className='px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-100 active:scale-95'>
              Deteksi Sekarang
            </button>
          </div>
        </div>

        {/* Static Result Example (Hanya untuk preview tampilan) */}
        <div className='mt-8'>
          <div className='bg-white border border-indigo-100 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm'>
            <div className='flex items-center gap-4'>
              <div className='w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold'>
                PY
              </div>
              <div>
                <p className='text-xs font-bold text-slate-400 uppercase tracking-wider'>
                  Terdeteksi Sebagai:
                </p>
                <h3 className='text-2xl font-black text-slate-800'>Python</h3>
              </div>
            </div>

            <div className='w-full md:w-48'>
              <div className='flex justify-between mb-1'>
                <span className='text-xs font-bold text-slate-500'>
                  Confidence
                </span>
                <span className='text-xs font-bold text-indigo-600'>98%</span>
              </div>
              <div className='h-2 w-full bg-slate-100 rounded-full overflow-hidden'>
                <div className='h-full bg-indigo-600 w-[98%] rounded-full' />
              </div>
            </div>
          </div>
        </div>

        {/* State: Belum Deteksi */}
        <div className='mt-8 p-10 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center'>
          <div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4'>
            <svg
              className='w-8 h-8 text-slate-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              />
            </svg>
          </div>
          <h3 className='text-lg font-bold text-slate-700'>
            Siap Menganalisis
          </h3>
          <p className='text-sm text-slate-400 max-w-xs mt-1'>
            Masukkan potongan kode di atas dan klik tombol deteksi untuk melihat
            hasil identifikasi AI.
          </p>
        </div>

        {/* Footer Info */}
        <footer className='mt-12 flex flex-wrap justify-center gap-4 opacity-40'>
          <div className='text-[10px] font-bold border border-slate-300 px-3 py-1 rounded-md uppercase'>
            JavaScript
          </div>
          <div className='text-[10px] font-bold border border-slate-300 px-3 py-1 rounded-md uppercase'>
            PHP
          </div>
          <div className='text-[10px] font-bold border border-slate-300 px-3 py-1 rounded-md uppercase'>
            Python
          </div>
        </footer>
      </div>
    </div>
  );
}
