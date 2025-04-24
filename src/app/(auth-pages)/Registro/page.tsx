import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
    return(
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <AuthForm isLogin={false}/>
        </div>
    );
}