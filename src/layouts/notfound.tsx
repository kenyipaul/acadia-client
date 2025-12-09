import Image from "next/image"

export default function PageNotFound() {
    return (
        <main className="w-dvw h-dvh bg-white flex items-center justify-center">
            <div className="flex flex-col items-center py-5 px-[min(5rem,5%)]">
                <Image className="max-w-[500px]" width="200" height="200" layout="responsive" alt="404 Page Not Found" src="/assets/images/404.svg" />
                <h1 className="text-center text-3xl font-roboto-bold mt-10 mb-2">PAGE NOT FOUND</h1>
                <p className="text-[#777] text-center">The Resource requested was not found on this server.</p>
            </div>
        </main>
    )
}
