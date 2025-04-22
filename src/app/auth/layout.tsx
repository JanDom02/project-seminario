export default function AuthLayout({
    children,
}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main className="mx-auto max-w-xl">
          <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {children}
          </div>
        </main>  
    )
}