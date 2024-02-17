const NotificationSection = () => {
    return (
        <section className={"px-20 py-10"}>
            <h2 className={"text-2xl text-center font-semibold"}>Notification Section</h2>


            <div className={"border max-w-3xl overflow-y-auto p-6 mx-auto border-slate-200 rounded-xl mt-4 w-full h-[500px]"}>
                {new Array(10).fill(0).map((_, i) => (
                    <a target={"_blank"} className={"text-xs block cursor-pointer  hover:border-b-2 border-gray-950 mb-2 leading-5"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias at, aut cumque, enim eveniet
                        harum inventore ipsam iste magnam magni nostrum omnis perspiciatis porro quibusdam quidem quos,
                        sapiente sequi.
                    </a>
                ))}
            </div>
        </section>
    )
}


export default NotificationSection