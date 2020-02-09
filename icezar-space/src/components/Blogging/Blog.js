import React, { Component } from "react";
import BlogHeader from "./BlogHeader";

class Blog extends Component {
  render() {
    return (
      <main id="content" role="main">
        <BlogHeader />
        <div class="container space-2 space-3-bottom--lg">
          <div class="row">
            <div class="col-lg-9 mb-9 mb-lg-0">
              <ul class="list-inline text-secondary mb-9">
                <li class="list-inline-item mr-4">
                  <span class="far fa-calendar-alt mr-2" />
                  August 15, 2018
                </li>
                <li class="list-inline-item mr-4">
                  <span class="far fa-folder-open mr-2" />
                  <a href="#">Business</a>
                </li>
              </ul>

              <div class="mb-9">
                <p>
                  I often feel guilt when I assign a story. This is partly a
                  function of being a woman who would, if she had her way,
                  please and comfort her entire universe of acquaintances, and
                  partly a function of having been convinced at a relatively
                  young age by the argument that Janet Malcolm famously made in{" "}
                  <em>The Journalist and the Murderer</em>: "Every journalist
                  who is not too stupid or full of himself to notice what is
                  going on knows that what he does is morally indefensible."
                </p>

                <p>
                  She's right, of course. The people who sing odes to my
                  profession's nobility are usually not journalists themselves.
                  Peter Thiel is certainly not. He wrote in the{" "}
                  <em>New York Times</em> op-ed section last week: "The press is
                  too important to let its role be undermined by those who would
                  search for clicks at the cost of the profession's reputation."
                </p>

                <div class="clearfix">
                  <img
                    class="img-fluid w-50 float-left mb-3 mr-3"
                    src="../../assets/img/500x450/img1.jpg"
                    alt="Image Description"
                  />

                  <p>
                    Thiel wrote that about Gawker, a place that is gone now, or
                    will be tomorrow. Since we learned of Thiel's{" "}
                    <a href="#">
                      covert campaign to bring financial ruin upon Gawker
                    </a>
                    , the people who work here have done whatever we could to
                    answer for our sins—feeling, as we often did, that those
                    sins weren't ours alone. Says Malcolm, "Journalists justify
                    their treachery in various ways according to their
                    temperaments. The more pompous talk about freedom of speech
                    and 'the public's right to know'; the least talented talk
                    about Art; the seemliest murmur about earning a living."
                  </p>

                  <p>
                    I was the deputy editor of Gawker for four months, and in
                    that time I enjoyed maybe three days without admonition from
                    my own conscience over how I earned a paycheck. My guilt
                    wasn't exactly Gawker-specific: I would have felt
                    self-recrimination anywhere I worked because I blush when I
                    tattle, and journalism, no matter where, can sometimes feel
                    a whole lot like tattling. Before Gawker, I spent about five
                    years at the <em>New Yorker</em>, where I felt some measure
                    of guilt, too, but it wasn't so acute. I was more junior
                    there, and the magazine has earned itself a sterling
                    reputation, which generally keeps it above the ethical fray
                    that Gawker is not only subjected to, but often courts. To
                    me, though, that was part of the appeal of my new job. I
                    looked forward to the challenge of publishing stories
                    without the protection that a more meritorious reputation
                    might have allowed. And we occasionally did that, sure. But
                    it is easy enough to isolate our best stories from criticism
                    with high-mindedness about bravery and Malcolmian ethics. In
                    fact, quotidian posts that neither ruin a writer's career
                    nor make it are what fill most hours of blogging life. They
                    do have consequences, though, and this is a story about
                    that.
                  </p>
                </div>

                <p>
                  The failure of the force-focus technique lies in old habits;
                  it's like when we were told to read something as a child. We
                  will do it, but because we were forced to do so, we
                  purposefully won't retain the information, just to prove the
                  point.
                </p>

                <p>
                  Why? Let's suppose a user went through the onboarding process
                  and even <em>listened</em> to what they were told. This is not
                  the case most of the time as it has been mentioned previously,
                  but let's ignore that for now. People then use your app, but
                  eventually it will be closed, after they finished with the
                  task that required the app in the first place. Let's assume
                  they won't use it again for a couple of days or even a couple
                  of weeks. Users open it up again and then what? Are they going
                  to be shown the onboarding screens again? By that point, they
                  are basically a "new user" again, hence they would require
                  your onboarding to understand how to use the app. The
                  application — of course — treats them as returning users and
                  won't explain anything. The users end up being confused at
                  first and then frustrated, ultimately leaving the app behind.
                </p>
              </div>

              <div class="mb-7">
                <a class="u-label u-label--dark u-label--sm mr-2" href="#">
                  Business
                </a>
                <a class="u-label u-label--dark u-label--sm mr-2" href="#">
                  Coffee
                </a>
                <a class="u-label u-label--dark u-label--sm mr-2" href="#">
                  Finance
                </a>
              </div>

              <div class="d-flex align-items-center">
                <h3 class="h6 d-inline-block text-uppercase mr-3 mb-0">
                  Share:
                </h3>

                <ul class="list-inline mb-0">
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-facebook-f u-icon__inner" />
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-google u-icon__inner" />
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-twitter u-icon__inner" />
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-pinterest u-icon__inner" />
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-get-pocket u-icon__inner" />
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-telegram-plane u-icon__inner" />
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                      <span class="fab fa-slack-hash u-icon__inner" />
                    </a>
                  </li>
                </ul>
              </div>

              <hr class="my-8" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Blog;
