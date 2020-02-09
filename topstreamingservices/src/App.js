import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import $ from 'jquery/src/jquery';
import _ from 'lodash';

import { correctHeight, detectBody, composeDevices, composeFeatureTooltip } from './common/Helpers';

import Progress from './common/Progress';
import TopHeader from './components/TopHeader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import VideoView from './views/Video';
import MusicView from './views/Music';
import DeviceView from './views/Device';
import LexiconView from './views/Lexicon';
import AboutView from './views/About';
import ContactView from './views/Contact';
import TermsView from './views/Terms';
import PrivacyView from './views/Privacy';
import SearchView from './views/Search'

import deviceData from './data/devices.json';
import featureData from './data/lexicon.json';
import videoServicesData from './data/video-services.json';
import musicServicesData from './data/music-services.json';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('Main constructor');

    this.state = {
      videoServices: [],
      musicServices: [],
      searchResults: []
    };
  }

  componentWillMount() {
    console.log('Main will mount');
    let videoServices = videoServicesData.list;
    let musicServices = musicServicesData.list;

    composeDevices(videoServices, deviceData.list);
    composeFeatureTooltip(videoServices, featureData.list);
    composeDevices(musicServices, deviceData.list);

    this.setState({
      videoServices: videoServices,
      musicServices: musicServices
    });
  }

  componentDidMount() {

    // Run correctHeight function on load and resize window event
    $(window).bind("load resize", function() {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    $('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300)
    });

    console.log('Main did mount');
  }

  componentWillUnmount() {
    console.log('Main will unmount');
  }

  // when tab clicking, re-render the side nav so that the active link is highlighted and, push the path to history
  activateSideNav = (path) => {
    this.props.history.push(path);
  }

  performSearch = (searchValue) => {

    console.log("searching for: "+searchValue);
    let searchables = _.concat(this.state.videoServices, this.state.musicServices, deviceData.list);
    let results = searchValue === "" ? [] :
      _.chain(searchables)
      .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .sortBy("name")
      .value();

    this.setState({
      searchResults: results,
      itemSelected: results ? results[0] : null
    });

    this.props.history.push({
      pathname: '/search?q='+searchValue,
      state: {results: results}
    })
  }

  fetchItem = (itemId) => {
    this.setState({
      itemSelected: _.find(this.state.searchResults, {'id': itemId})
    })
  }

  render() {
        
    let wrapperClass = "gray-bg";
    return (
      <div id="wrapper">
        <Progress />
        <Navigation location={this.props.location} />

        <div id="page-wrapper" className={wrapperClass}>

          <TopHeader location={this.props.location} search={this.performSearch} />

          <Switch>
            <Route exact path='/' render={props => <VideoView services={this.state.videoServices} updateSideNav={this.activateSideNav} {...props} />} />
            <Route path='/video/:tab' render={props => <VideoView services={this.state.videoServices} updateSideNav={this.activateSideNav} {...props} />} />
            <Route path='/music' render={props => <MusicView services={this.state.musicServices} {...props} />} />
            <Route path='/device/:tab' render={props => <DeviceView devices={deviceData.list} updateSideNav={this.activateSideNav} {...props} />} />
            <Route path='/lexicon' render={props => <LexiconView/>} />
            <Route path='/about' render={props => <AboutView/>} />
            <Route path='/contact' render={props => <ContactView/>} />
            <Route path='/terms' render={props => <TermsView/>} />
            <Route path='/privacy' render={props => <PrivacyView/>} />
            <Route path='/search:q?' render={props => <SearchView results={this.state.searchResults} itemSelected={this.state.itemSelected} fetchItem={this.fetchItem} {...props} />} />
          </Switch>

          <Footer />

        </div>

      </div>

    )
  }
}

export default withRouter(App);
