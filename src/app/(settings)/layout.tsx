import Sidebar from "@/components/SideBarComponet";

export default function SettingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64">
          <Sidebar/>
        </aside>
        <main className="flex-1 p-6">{children}</main>
       </div>
    );
};