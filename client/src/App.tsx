import { Link, NavLink, Route, Routes } from 'react-router-dom';

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
  ].join(' ');

function Shell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_28%),linear-gradient(180deg,_#fff7ed_0%,_#ffffff_42%,_#f8fafc_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 md:px-10">
        <header className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              DeepCode
            </p>
            <h1 className="mt-1 text-2xl font-black tracking-tight">React Router Demo</h1>
          </div>

          <nav className="flex flex-wrap gap-2">
            <NavLink to="/" className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClassName}>
              Dashboard
            </NavLink>
            <NavLink to="/login" className={navLinkClassName}>
              Login
            </NavLink>
            <NavLink to="/register" className={navLinkClassName}>
              Register
            </NavLink>
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClassName}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClassName}>
              Contact
            </NavLink>
          </nav>
        </header>

        <section className="grid flex-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {title}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
            <div className="mt-8">{children}</div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Quick routes
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
              <li>
                <span className="block font-semibold text-white">/</span>
                Trang chủ giới thiệu.
              </li>
              <li>
                <span className="block font-semibold text-white">/about</span>
                Thông tin về ứng dụng.
              </li>
              <li>
                <span className="block font-semibold text-white">/dashboard</span>
                Tổng quan số liệu và hoạt động.
              </li>
              <li>
                <span className="block font-semibold text-white">/login</span>
                Trang đăng nhập.
              </li>
              <li>
                <span className="block font-semibold text-white">/register</span>
                Trang đăng ký tài khoản.
              </li>
              <li>
                <span className="block font-semibold text-white">/services</span>
                Danh sách dịch vụ mẫu.
              </li>
              <li>
                <span className="block font-semibold text-white">/contact</span>
                Form liên hệ cơ bản.
              </li>
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}

function HomePage() {
  return (
    <Shell
      title="Home"
      description="Đây là trang chủ. Bạn có thể dùng các đường dẫn ở thanh điều hướng để chuyển trang mà không tải lại toàn bộ ứng dụng."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100">
          <p className="text-sm font-semibold text-orange-600">React Router</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Điều hướng SPA bằng Link, NavLink và Route.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
          <p className="text-sm font-semibold text-slate-900">Mở rộng dễ dàng</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Sau này bạn có thể tách từng route sang file riêng hoặc thêm route con.
          </p>
        </div>
      </div>
    </Shell>
  );
}

function AuthShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_28%),linear-gradient(180deg,_#fff7ed_0%,_#ffffff_42%,_#f8fafc_100%)] text-slate-950">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <section className="flex items-end rounded-[2rem] border border-slate-900 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] lg:p-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
              DeepCode Auth
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">{description}</p>

            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">{eyebrow}</p>
                <p className="mt-1 leading-6">Thiết kế tối giản, rõ ràng, dễ mở rộng.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">React Router</p>
                <p className="mt-1 leading-6">Chuyển trang mà không reload toàn bộ app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur sm:p-10">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Đăng nhập"
      description="Mẫu trang đăng nhập để người dùng truy cập vào hệ thống."
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Login
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
          Chào mừng bạn quay lại
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Nhập email và mật khẩu để tiếp tục.
        </p>
      </div>

      <form className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Mật khẩu
          <input
            type="password"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="••••••••"
          />
        </label>

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-orange-500" />
            Ghi nhớ tôi
          </label>
          <button type="button" className="font-semibold text-orange-600 hover:text-orange-700">
            Quên mật khẩu?
          </button>
        </div>

        <button
          type="button"
          className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
        >
          Đăng nhập
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-600">
        Chưa có tài khoản?{' '}
        <Link to="/register" className="font-semibold text-orange-600 hover:text-orange-700">
          Đăng ký ngay
        </Link>
      </p>
    </AuthShell>
  );
}

function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Create account"
      title="Đăng ký"
      description="Tạo tài khoản mới để bắt đầu sử dụng ứng dụng."
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Register
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
          Tạo tài khoản mới
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Điền thông tin bên dưới để đăng ký.
        </p>
      </div>

      <form className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Họ và tên
          <input
            type="text"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="Nguyễn Văn A"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Mật khẩu
          <input
            type="password"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="Tạo mật khẩu"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Xác nhận mật khẩu
          <input
            type="password"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="Nhập lại mật khẩu"
          />
        </label>

        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500" />
          Tôi đồng ý với điều khoản sử dụng.
        </label>

        <button
          type="button"
          className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
        >
          Đăng ký
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-600">
        Đã có tài khoản?{' '}
        <Link to="/login" className="font-semibold text-orange-600 hover:text-orange-700">
          Đăng nhập
        </Link>
      </p>
    </AuthShell>
  );
}

function DashboardPage() {
  return (
    <Shell
      title="Dashboard"
      description="Tổng quan nhanh cho các số liệu chính của ứng dụng."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Users', value: '1,284' },
          { label: 'Revenue', value: '$48.2K' },
          { label: 'Orders', value: '392' },
          { label: 'Conversion', value: '12.8%' },
        ].map((metric) => (
          <div key={metric.label} className="rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-sm font-medium text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-black tracking-tight">{metric.value}</p>
            <p className="mt-2 text-xs text-slate-400">So với kỳ trước</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Recent activity</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>• New order received from landing page.</p>
            <p>• User signed up from dashboard route.</p>
            <p>• Payment status updated successfully.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
          <p className="text-sm font-semibold text-orange-700">Focus</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Đây là route dashboard mẫu để bạn mở rộng thành trang quản trị thật sau này.
          </p>
        </div>
      </div>
    </Shell>
  );
}

function AboutPage() {
  return (
    <Shell
      title="About"
      description="Trang này mô tả ngắn gọn về app demo. Đây là nơi thích hợp để đặt giới thiệu dự án hoặc thông tin sản phẩm."
    >
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Ứng dụng hiện được cấu hình với react-router-dom để điều hướng giữa nhiều trang.
        </p>
        <p>
          Nếu bạn muốn, tôi có thể tách từng trang ra thành các file riêng để code dễ bảo trì hơn.
        </p>
      </div>
    </Shell>
  );
}

function ServicesPage() {
  return (
    <Shell title="Services" description="Một trang dịch vụ mẫu để minh hoạ thêm route.">
      <div className="grid gap-4 md:grid-cols-3">
        {['UI/UX', 'Frontend', 'Backend'].map((service) => (
          <div key={service} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-base font-semibold text-slate-950">{service}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Nội dung placeholder cho route dịch vụ.
            </p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function ContactPage() {
  return (
    <Shell title="Contact" description="Một form liên hệ mẫu để route trông thực tế hơn.">
      <form className="grid gap-4">
        <input
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          placeholder="Tên của bạn"
        />
        <input
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          placeholder="Email"
        />
        <textarea
          className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          placeholder="Nội dung liên hệ"
        />
        <button
          type="button"
          className="w-fit rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
        >
          Gửi liên hệ
        </button>
      </form>
    </Shell>
  );
}

function NotFoundPage() {
  return (
    <Shell title="404" description="Không tìm thấy đường dẫn bạn đang mở.">
      <p className="text-sm text-slate-600">Hãy quay lại một trong các route phía trên.</p>
    </Shell>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;