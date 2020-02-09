import React, {Component} from 'react';

import StickyNote from '../common/StickyNote';

class AboutContainer extends Component {

  render() {

    return (
      <div className="col-lg-12">
        <div className="ibox">
          <div className="ibox-content">
            <ul className="notes">
              <StickyNote date="02-04-2017"
                          title="The Idea"
                          description="How do you choose a streaming service? After reading a lot of reviews we were more confused than before. There was no space where all services were easily comparable, so we decided to create one."
              />
              <StickyNote date="02-12-2017"
                          title="The Team"
                          description="We're a bunch of old school technology enthusiasts, trying to keep up with the staggering pace of advancements, especially in the media and content space."
              />
              <StickyNote date="03-01-2017"
                          title="Video Services"
                          description="Initially, that's all we wanted. Choosing between Netflix and Amazon...and a few other video streaming services. And then, we realized that there are alternatives to cable TV..."
              />
              <StickyNote date="04-01-2017"
                          title="Music Services"
                          description="Streaming music from Pandora for free was ok for a while. But then we wanted more and we were confused again. Too many services to choose from and a lot of information scattered everywhere."
              />
              <StickyNote date="04-15-2017"
                          title="Devices"
                          description="When looking for streaming services, we discovered that not all work on all streaming devices. Well, ok... we started to learn about streaming devices."
              />
              <StickyNote date="05-01-2017"
                          title="Lexicon"
                          description="During our exploration, we've had to learn a lot of new terms and words we had no idea they existed. So we've made it easier for you to discover and understand them."
              />
              <StickyNote date="06-01-2017"
                          title="News Feed"
                          description="Almost every day, a new service pops up, some new gizmo is invented, so how do you keep up with all this?"
              />
            </ul>
            <span className="clear"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
