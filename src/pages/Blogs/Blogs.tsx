import { Link } from "react-router";

const Blogs = () => {
    return (
        <div className="flex flex-col gap-6">
            <h1>Blogs</h1>

            <div className="flex flex-col gap-6">
                <div className="blog-card border p-3 flex flex-col gap-2 rounded-md">
                    <Link to={"adapting-to-life-abroad"}>
                        <h3 className="font-semibold hover:text-teal-500 cursor-pointer w-fit transition-all ease-in-out">
                            Adapting to Life Abroad: Embracing a New Culture, Language, and
                            Community
                        </h3>
                    </Link>
                    <div className="line-clamp-3 opacity-80">
                        <p>
                            Moving to the U.S. was more than just an academic journey—it was a
                            life transition. Adapting to a completely different environment,
                            culture, and social dynamic wasn&#39;t always easy, but it was an
                            experience that taught me resilience, empathy, and the value of
                            community.
                        </p>
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                        <div>05/03/2025</div>
                        <Link
                            to={"adapting-to-life-abroad"}
                            className="cursor-pointer hover:text-teal-500 transition-all ease-in-out"
                        >
                            Read More
                        </Link>
                    </div>
                </div>

                <div className="blog-card border p-3 flex flex-col gap-2 rounded-md">
                    <Link to={"moving-to-us"}>
                        <h3 className="font-semibold hover:text-teal-500 cursor-pointer w-fit transition-all ease-in-out">
                            From the Himalayas to the Midwest: My Journey from Nepal to the
                            U.S. for a Master's in Computer Science
                        </h3>
                    </Link>
                    <div className="line-clamp-3 opacity-80">
                        When I boarded my flight from Kathmandu, I was filled with
                        excitement, anxiety, and endless thoughts about what life in the
                        United States would look like. Pursuing a{" "}
                        <strong>Master&#39;s in Computer Science</strong> had long been a
                        dream, and now it was real—classes, new people, new culture, and an
                        entirely new rhythm of life awaited me in{" "}
                        <strong>Vermillion, South Dakota</strong>.
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                        <div>04/30/2025</div>
                        <Link
                            to={"moving-to-us"}
                            className="cursor-pointer hover:text-teal-500 transition-all ease-in-out"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
