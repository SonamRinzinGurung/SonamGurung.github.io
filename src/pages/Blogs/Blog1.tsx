const MovingToUS = () => {
    return (
        <div className="blog-post flex flex-col gap-6">
            <header className="">
                <h1>
                    From the Himalayas to the Midwest: My Journey from Nepal to the U.S.
                    for a Master's in Computer Science
                </h1>
                <div className="post-meta flex justify-between opacity-80">
                    <div>By Sonam Rinzin Gurung</div>
                    <div>Posted on April 30, 2025</div>
                </div>
            </header>

            <section className="post-content flex flex-col gap-4">
                <p>
                    When I boarded my flight from Kathmandu, I was filled with excitement,
                    anxiety, and endless thoughts about what life in the United States
                    would look like. Pursuing a{" "}
                    <strong>Master&#39;s in Computer Science</strong> had long been a dream,
                    and now it was real—classes, new people, new culture, and an entirely
                    new rhythm of life awaited me in {" "}
                    <strong>Vermillion, South Dakota</strong>.
                </p>
                <div>
                    <h2>Why the U.S.?</h2>
                    <p>
                        Back in Nepal, I had completed my Bachelor's in Computer Science
                        with First Class Honors, working on multiple software development
                        projects and gaining some real-world experience through internships
                        and full-time roles. But I always knew there was more to
                        explore—more advanced coursework, more innovation, and exposure to
                        global perspectives in tech. The U.S. is home to some of the world&#39;s
                        top tech companies and research in computer science, so pursuing a
                        Master&#39;s here felt like the right step toward leveling up my skills
                        and career.
                    </p>
                </div>
                <div>
                    <h2>First Impressions</h2>
                    <p>
                        My first few weeks in the U.S. were a whirlwind—orientation
                        sessions, navigating campus, setting up my bank account, and
                        figuring out the grocery aisles. South Dakota was quiet compared to
                        the chaos of Kathmandu, but it was also peaceful, organized, and
                        welcoming. The people here are warm, and although I missed the
                        comfort of home-cooked <em>dal bhat</em>, I quickly found a rhythm.
                    </p>
                </div>
                <div>
                    <h2>Academic Shift</h2>
                    <p>
                        Adjusting to the academic environment in the U.S. took some effort.
                        The teaching style here is more discussion-based and
                        research-oriented. Courses like <strong>Data Mining</strong> and{" "}
                        <strong>Distributed Systems</strong> aren&#39;t just about passing
                        exams—they challenge you to solve real-world problems, collaborate
                        on team projects, and think critically. I&#39;ve come to appreciate the
                        freedom to explore topics deeply and the emphasis on hands-on
                        learning.
                    </p>
                </div>
                <div>
                    <h2>Challenges Along the Way</h2>
                    <p>
                        It hasn&#39;t all been easy. From culture shock and homesickness to
                        learning how to survive Midwest winters, there have been plenty of
                        hurdles. I&#39;ve learned to manage my time better, cook my own meals,
                        and build a support network from scratch. But every challenge has
                        also brought growth—personally and professionally.
                    </p>
                </div>

                <div>
                    <h2>A Growing Journey</h2>
                    <p>
                        Today, I work on side projects, collaborate with global teams
                        remotely, and participate in tech communities. I&#39;m building tools
                        that people actually use and learning from some of the best minds in
                        the field. The decision to move wasn&#39;t just about education—it was
                        about transformation.
                    </p>
                </div>
                <div>
                    <h2>Final Thoughts</h2>
                    <p>
                        To anyone considering a similar path: it&#39;s worth it. Not just for
                        the degree, but for the growth, the perspective, and the stories
                        you&#39;ll carry for a lifetime. Moving from Nepal to the U.S. for my
                        Master&#39;s has been one of the most enriching decisions I&#39;ve made. I
                        came here to study computer science—but I&#39;m learning so much more.
                    </p>
                </div>
            </section>

            <footer className="post-footer">
                <p>
                    Thank you for reading! Feel free to{" "}
                    <a href="mailto:sonamrinzingurung@gmail.com">connect with me</a> or
                    follow my journey on{" "}
                    <a href="https://github.com/sonamrinzingurung" target="_blank" className="text-teal-500">
                        GitHub.
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default MovingToUS;
