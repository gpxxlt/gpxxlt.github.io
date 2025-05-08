import ProjectSection from "@/app/projects/project";

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="container w-full mx-auto">

                {/*  Actual content goes here  */}
                {/*  Golden ratio padding when viewing from laptop */}
                {/*  Layout by section  */}
                <div className="max-w-4xl mx-auto">
                    <div className="w-full lg:w-[1-61.8%] mx-auto">

                        <div className="bg-white rounded-lg shadow p-6 mb-8">
                            <h2 className="text-xl font-semibold">Section One</h2>
                            <p className="mt-3">This is the first section of your content. Each section is contained
                                within its own box-like structure for clear visual separation.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6 mb-8">
                            <h2 className="text-xl font-semibold">Section Two</h2>
                            <p className="mt-3">This is the second section of your content. The boxes have consistent
                                styling but can contain different types of content.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <ProjectSection/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
