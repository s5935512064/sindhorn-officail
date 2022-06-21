import Image from 'next/image'
import Link from "next/link";
const Navbar = () => {
    return (
        <>
            <div className="z-20 fixed top-0 w-full flex justify-center h-14 items-center px-5 md:px-10 border-b shadow-sm bg-white">
                <div className="h-full w-full inline-flex justify-between items-center  relative">
                    <Link href={"/"}>

                        <div className="w-36 h-full relative left-0 " >

                            <Image
                                src="/assets/ssd-logo.png"
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                                className="hover:animate-pulse cursor-pointer"
                            />

                        </div>
                    </Link>

                    <div className="flex gap-3">
                        <Link href={"/privacypolicy"}>
                            <button className="text-sm uppercase font-semibold">Privacy Policy</button>
                        </Link>
                        {/* <button className="text-sm">MENU</button> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;