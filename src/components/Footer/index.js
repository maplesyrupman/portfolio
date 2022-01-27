export default function Footer() {
    return (
        <div className='bg-black text-white w-full h-10 absolute bottom-0 flex items-center justify-center'>
            <h1 className="">maplesyrupman ©{(new Date).getUTCFullYear()}</h1>
        </div>
    )
}