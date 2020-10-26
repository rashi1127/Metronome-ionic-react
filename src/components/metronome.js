import React, {Component} from "react";
import { IonCol, IonItem, IonRow } from "@ionic/react";
import { IonContent, IonHeader, IonPage, IonRouterOutlet,IonMenuButton, IonButton,IonButtons,IonMenu,IonTitle, IonList, IonLabel, IonFabButton,IonRadioGroup, IonRadio, IonRange,  IonInput, IonToolbar, IonIcon } from '@ionic/react';
import ModalExample from "./modal";

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
// import { Route } from "react-router";

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
  handleBeats=(type)=>{
    if(type==="plus")
    {

      this.setState({beatsPerMeasure:this.state.beatsPerMeasure===12?12:this.state.beatsPerMeasure+1})
    }
    else 
    this.setState({beatsPerMeasure:this.state.beatsPerMeasure===1?1:this.state.beatsPerMeasure-1})
  }

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
    if (event.target.value <= 12 && event.target.value >= 1) {
      this.setState({
        beatsPerMeasure: event.target.value
      });
    } else {
      //disableInput should eliminate the need for this
      alert("Please select a value between 1 & 16");
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
        buttons.push(<IonFabButton className="nap" style={{ textAlign:"center",diaplay:"flex",alignItems:"center", justifyContent:"center",  marginTop:"10px"}}color={this.state.count===i?"secondary":"primary"}>
        <img  id="header_logo" height="35" src={note} /> </IonFabButton>);
      }
     return buttons;
  }

  render() {
    const { playing, bpm, click } = this.state;
      
    return (
    <IonPage className="test">
      <IonContent class="background" >
         {/* <ModalExample side="start" menuId="custom" className="my-custom-menu" mode="ios" handleChange={this.handleClickChange} click={this.state.click}/> */}
      <IonRouterOutlet id="main">
       </IonRouterOutlet>
       
      <IonHeader className="metHead" style={{backgroundColor: "#55C1A2", height: "70px"}}>
            <IonRow  >
              {/* <IonCol size="auto"> 
                <ion-header>
                  <ion-toolbar  >
                     <ion-buttons slot="start" >
                        <ion-menu-button style={{backgroundColor:"#55C1A2"}}></ion-menu-button>
                       </ion-buttons>
                  </ion-toolbar>
                </ion-header>
              </IonCol> */}
              <ModalExample side="start" menuId="custom" className="my-custom-menu" mode="ios" handleChange={this.handleClickChange} click={this.state.click}/>
              <IonCol style={{ marginTop:"10px",fontSize: "40px",textAlign:"center",alignItems:"center", justifyContent:"center", display:"flex", color:"#000"}}>
                Metronome <img  id="header_logo" height="42" src={drum} />
              </IonCol> 
            </IonRow>
        </IonHeader>
         <IonRow style={{maxWidth:"800px", margin:"0 auto"}}>
          <IonCol style={{marginLeft:"60px", textAlign:"center",alignItems:"center", justifyItem:"center", display:"grid", gridTemplateColumns: "repeat(4,minmax(50px,1fr)" ,minHeight:"250px"}}>
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
         {/* <IonList className="time-signature">
          <br/>
          <IonItem>
            <IonLabel style={{ fontSize: "30px", color:"yellow", marginLeft: "25px", marginTop: "9px"}}>Beats per bar</IonLabel>
            <IonInput style={{ fontSize: "30px", color:"#FFFF33"}}
              type="number"
              min="1"
              max="20"
              onKeyDown={this.disableInput}
              onIonChange={this.handleTimeChange}
             />
          </IonItem>
         </IonList> */}
         
        <IonList className="bpm-slider" style={{ marginTop: "14px",maxWidth:"700px", margin:"0 auto"}}>
          <IonCol>
          {/* <IonVirtualScroll [items]="items" approxItemHeight="320px">
            </IonVirtualScroll> */}
          <IonLabel  style={{ fontSize: "30px", color:"white", marginLeft: "30px",alignItems: "center",justifyContent:"center", display:"flex",fontFamily: "proximanova bold,Helvetica Neue,Helvetica,Arial,sans-serif"}}>{bpm} BPM</IonLabel>
            <IonRange className="range" style={{ fontSize: "25px", color:"white", heigth:"500px"}}
              type="range"
              min="60"
              max="240"
              mode="ios"
              value={bpm}
              onIonChange={this.handleBpmChange}
            />
          </IonCol>
        </IonList>
        <br />
        {/* <br /> */}
        <IonCol style={{maxWidth:"700px", margin:"0 auto",alignItems: "center",justifyContent:"center", display:"flex"}}>
        <IonList >
          <IonItem className="time-signature" style={{maxWidth:"700px", margin:"0 auto"}}>
            <IonLabel style={{ fontSize: "30px", color:"white", maxWidth:"700px", margin:"0 auto",alignItems: "center",justifyContent:"center", display:"flex",fontFamily: "proximanova bold,Helvetica Neue,Helvetica,Arial,sans-serif"}}>Beats per bar</IonLabel>
            </IonItem>
            <IonItem style={{maxWidth:"700px", margin:"0 auto",}}>
            <IonFabButton color="secondary" style={{fontSize:"30px"}} onClick={()=>this.handleBeats('minus')}>-</IonFabButton>
            <IonInput style={{ fontSize: "30px", color:"#FFF",textAlign:"center",alignItems: "center",justifyContent:"center", display:"flex"}} value={this.state.beatsPerMeasure} placeholder="Enter Input " ></IonInput>
            {/* <IonInput style={{ fontSize: "30px", color:"#FFF", marginLeft:"20px"}}
              type="number"
              min="1"
              max="12"
              autofocus
              onKeyDown={this.disableInput}
              onIonChange={this.handleTimeChange}
             /> */}
             <IonFabButton color="secondary" style={{fontSize:"30px"}} onClick={()=>this.handleBeats("plus")}>+</IonFabButton>
          </IonItem>
         </IonList>
            </IonCol>
           
        <IonFabButton onClick={this.startStop} color="danger" size="large" style={{ fontSize: "19px", color:"blue", margin:"10px auto" }}>
              {playing ? <img  id="header_logo" height="40" src={pause} /> : <img  id="header_logo" height="40" src={play} /> }
            </IonFabButton>
      </IonContent>
    </IonPage>
    );
  }
}

export default Metronome;
