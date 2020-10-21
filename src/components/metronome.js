import React, {Component} from "react";
import { IonCol, IonItem, IonRow } from "@ionic/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonList, IonLabel, IonFabButton,IonRadioGroup, IonRadio, IonRange,  IonInput } from '@ionic/react';
// import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

import click1 from "../audio/click1.wav";
import click2 from "../audio/click2.wav";
import bleep1 from "../audio/bleep1.wav";
import bleep2 from "../audio/bleep2.wav";
import drum1 from "../audio/drum1.wav";
import drum2 from "../audio/drum2.wav";
import "./metronome.scss";
import ci from 'correcting-interval';
import note from '../img/note.png';
import pause from '../img/pause.png';
import play from '../img/play.png';
import drum from '../img/drum.png';

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 120,
      beatsPerMeasure: 4,
      clickperbeat: 1,
      counter: 1,
      click: "Bleep"
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
    this.bleep1 = new Audio(bleep1);
    this.bleep2 = new Audio(bleep2);
    this.drum1 = new Audio(drum1);
    this.drum2 = new Audio(drum2);

    this.startStop = this.startStop.bind(this);
    this.playClick = this.playClick.bind(this);
    this.handleBpmChange = this.handleBpmChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
  }
  

  startStop() {
    if (this.state.playing) {
      //stops timer
      ci.clearCorrectingInterval(this.timer);
      this.setState({
        playing: false
      });
    } else {
      //starts timer with current bpm
      var that = this;
      this.timer = ci.setCorrectingInterval(function() {
        that.playClick();
      },
        (60 / this.state.bpm) * 1000
      );
      this.setState(
        {
          count: 0,
          playing: true
          //plays a click "immediately" (after setState finishes)
        },
        this.playClick
      );
    }
  };

  playClick() {
    const { count, beatsPerMeasure } = this.state;
    //The first beat will have a different sound that the others
    if (count % beatsPerMeasure === 0) {
      switch (this.state.click) {
        case "Click":
          this.click2.play();
          break;
        case "Bleep":
          this.bleep2.play();
          break;
        case "808":
          this.drum2.play();
          break;
        default:
          this.drum2.play();
      }
    } else {
      switch (this.state.click) {
        case "Click":
          this.click1.play();
          break;
        case "Bleep":
          this.bleep1.play();
          break;
        case "808":
          this.drum1.play();
          break;
        default:
          this.drum1.play();
      }
    }
    //Keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  handleBpmChange(event) {
    const bpm = event.target.value;

    if (this.state.playing) {
      //stop the old timer and start a new one
      var that = this;
      ci.clearCorrectingInterval(this.timer);
      this.timer = ci.setCorrectingInterval(() => {
        that.playClick();
      },
        (60 / this.state.bpm) * 1000
      );
      //Set the new bpm, and reset the beat counter
      this.setState({
        count: 0,
        bpm
      });
    } else {
      //otherwise just update the bpm
      this.setState({ bpm });
    }
  };

  handleTimeChange(event) {
    if (event.target.value <= 20 && event.target.value >= 1) {
      this.setState({
        beatsPerMeasure: event.target.value
      });
    } else {
      //disableInput should eliminate the need for this
      alert("Please select a value between 1 & 20");
      this.setState({
        beatsPerMeasure: 4
      });
    }
  };

  handleClickChange(event) {
      console.log(event.target.value)
    this.setState({
      click: event.target.value
    });
  };

  disableInput(event) {
    event.preventDefault();
    event.stopPropagation();
  };

  componentWillUnmount() {
    ci.clearCorrectingInterval(this.timer);
    this.setState({
      playing: false,
      count: 0,
      bpm: 120,
      beatsPerMeasure: 4,
      click: "Click"
    });
  };
  getButtons(){
    const buttons=[];
      for (let i = 0; i < this.state.beatsPerMeasure; i++) {
        buttons.push(<IonFabButton size="large" style={{  marginTop:"10px"}}color={this.state.count===i?"secondary":"primary"}>
        <img  id="header_logo" height="40" src={note} /> </IonFabButton> );
      }
     return buttons;
  }

  render() {
    const { playing, bpm, click } = this.state;
      
    return (
    <IonPage className="test">
      <IonContent class="background" >
          <IonHeader className="metHead" style={{backgroundColor: "rgb(60 159 204)", height: "60px"}}>
            <IonRow  >
              <IonCol className="rowsstyle" style={{ fontSize: "32px",textAlign:"center",alignItems:"center", justifyContent:"center", display:"flex", color:"yellow"}}>Metronome Beats<img  id="header_logo" height="42" src={drum} />
              {/* <IonTitle style={{fontSize: "40px", color:"#191970"}}>Metronome Beats</IonTitle> 24 141 193*/}
              </IonCol> 
            </IonRow>
          </IonHeader>
        <IonRow  style={{ marginLeft: "80px"}}>
        <IonCol style={{ alignItems:"center", justifyContent:"space-between", flexDirection:"row", flex: "1",display:"grid", gridTemplateColumns: "60px 60px 60px 60px 60px"}}>
          { this.getButtons()}
          {/* <IonFabButton size="large" style={{  marginTop:"10px"}}color={this.state.count===0?"secondary":"primary"}>
          <img  id="header_logo" height="40" src={note} /> 
          </IonFabButton> */}
          {/* </IonCol><IonCol>
          <IonFabButton size="large" style={{  marginTop:"10px"}}color={this.state.count===1?"secondary":"primary"}>
          <img  id="header_logo" height="40" src={note} /> 
          </IonFabButton>
          </IonCol><IonCol>
          <IonFabButton size="large" style={{ marginTop:"10px"}}color={this.state.count===2?"secondary":"primary"}>
          <img  id="header_logo" height="40" src={note} /> 
          </IonFabButton>
          </IonCol><IonCol>
          <IonFabButton size="large" style={{  marginTop:"10px"}}color={this.state.count===3?"secondary":"primary"}>
          <img  id="header_logo" height="40" src={note} /> 
          </IonFabButton> */}
          </IonCol>
          </IonRow>
         <IonList className="time-signature">
          <br/>
          <IonItem>
            <IonLabel style={{ fontSize: "30px", color:"yellow", marginLeft: "25px", marginTop: "9px"}}>{this.state.beatsPerMeasure}/4 Time</IonLabel>
            <IonInput style={{ fontSize: "30px", color:"#FFFF33"}}
              type="number"
              min="1"
              max="20"
              onKeyDown={this.disableInput}
              onIonChange={this.handleTimeChange}
             />
          </IonItem>
         </IonList>
         
        <IonList className="bpm-slider" style={{ marginTop: "14px"}}>
          <IonCol>
          <IonLabel  style={{ fontSize: "30px", color:"yellow", marginLeft: "30px",alignItems: "center",justifyContent:"center", display:"flex"}}>{bpm} BPM</IonLabel>
            <IonRange className="range" style={{ fontSize: "25px", color:"white", heigth:"500px"}}
              type="range"
              min="60"
              max="240"
              mode="ios"
              value={bpm}
              onIonChange={this.handleBpmChange}
            />
            <IonFabButton onClick={this.startStop} size="large" style={{ fontSize: "19px", color:"white", margin:"10px auto" }}>
              {playing ? <img  id="header_logo" height="40" src={pause} /> : <img  id="header_logo" height="40" src={play} /> }
            </IonFabButton>
          </IonCol>
        </IonList>
        <br />
        <br />
        <IonList className="click-type">
          <IonRadioGroup value={click} onIonChange={(e)=>this.handleClickChange(e)}>
            <IonLabel style={{ color:"#FFFF33", marginLeft: "50px", alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "30px"}}>{click}</IonLabel>
            <IonItem className="click-input">
            <br />
              <IonRow  style={{display:"flex",alignItems:'center',justifyContent:"center",width:"100%"}}>
                <IonCol>
              <IonLabel style={{ color:"#00FFFF", marginLeft: "50px", fontSize: "25px"}}>Click</IonLabel>
              </IonCol>
              <IonCol>
              <IonRadio 
                type="radio"
                value="Click"
                checked={this.state.click === "Click"}
              />
              </IonCol>
              <IonCol>
              <IonLabel style={{ color:"#00FFFF", marginLeft: "50px", fontSize: "25px"}}>Bleep</IonLabel>
              </IonCol>
              <IonCol>
              <IonRadio
                type="radio"
                value="Bleep"
                checked={this.state.click === "Bleep"}
              />
              </IonCol>
              <IonCol>
              <IonLabel style={{ color:"#00FFFF", marginLeft: "50px", fontSize: "25px"}}>808</IonLabel>
              </IonCol>
              <IonCol>
              <IonRadio
                type="radio"
                value="808"
                checked={this.state.click === "808"}
              />
              </IonCol>
              </IonRow>
              </IonItem>
            </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonPage>
    );
  }
}

export default Metronome;
