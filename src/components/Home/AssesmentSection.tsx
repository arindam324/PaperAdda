const AssesmentSection = () => {
    return (
        <section className={"px-20 py-10"}>
            <div className={"flex items-center justify-center"}>
                <img src={"https://www.iconpacks.net/icons/1/free-target-icon-777-thumb.png"}
                     className={"w-[80px] h-[80px] "}/>
                <h3 className={"text-3xl font-semibold text-center"}>
                    Assesment Section
                </h3>
            </div>

            <div className={"mt-5 flex "}>
                <div className={"w-1/2 h-[300px]"}>
                    <img src={"/target.gif"} alt={""} className={"w-full object-contain h-full"}/>
                </div>
                <div className={"w-1/2 flex flex-col justify-center"}>
                    <p className={"text-lg font-semibold"}>
                        Assess Your Knowledge
                    </p>
                    <p className={"text-sm text-gray-400 mt-2"}>
                        Assess your knowledge and skills with our comprehensive assessments and get a detailed report
                        on your
                        performance.
                    </p>
                </div>
            </div>
        </section>
    )
}


export default AssesmentSection