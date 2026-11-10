import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-center text-white">
      <h1 className="text-8xl font-black tracking-widest text-indigo-500 drop-shadow-md">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-slate-400">
        Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau
        sementara tidak tersedia.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/25 active:scale-95"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
