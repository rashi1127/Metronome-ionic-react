import React, { Component, useState } from "react";
import {IonContent, IonModal, IonButton,IonSplitPane, IonList, IonRadioGroup,IonItem, IonRadio, IonMenuToggle, IonHeader, IonMenu,IonTitle,IonLabel,IonToolbar, IonIcon, IonRow, IonCol } from '@ionic/react';
// import ModalExample from "./modal"
import note from '../img/note.svg';
import setting from '../img/setting.png';

class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false
    }
  }
  
render(){
const {showModal}=this.state;

return(
  // <IonMenu>
  {/* <img  id="header_logo"  src={setting} /> */}
        <IonHeader>
             <IonToolbar color="warning" style={{color:"#000"}}>
               <IonTitle style={{fontSize:"30px",alignItems: "center",textAlign:"center",justifyContent:"center", display:"flex",fontFamily: "proximanova bold,Helvetica,Arial,sans-serif"}}>Timber <img  id="header_logo" height="35" marginLeft="20px" src={note} /> </IonTitle>
             </IonToolbar>
            </IonHeader> 
          <IonContent> 
            <IonMenuToggle autoHide={false}>
              <IonRow>
                 <IonCol> 
                <IonIcon name="sound" slot="start" ></IonIcon>
             <IonLabel style={{ color:"#FFF", marginLeft: "10px", alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "25px"}}> Tracks</IonLabel> 
             <IonLabel style={{ color:"#FFF", marginLeft: "10px", alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "25px"}}>{this.props.click}</IonLabel>
                </IonCol> 
                <IonCol> <IonModal isOpen={showModal} cssClass='my-custom-class'><img  id="header_logo"  src={setting} />
                <IonList className="click-type">
          <IonRadioGroup value={this.props.click} onIonChange={(e)=>this.props.handleChange(e)}>
            <IonLabel style={{ color:"#FFF", marginLeft: "50px", alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "30px"}}>{this.props.click}</IonLabel>
            <IonItem className="click-input">
            <br />
              <IonRow  style={{display:"flex",alignItems:'center',justifyContent:"center",width:"100%"}}>
                <IonCol>
              <IonLabel style={{ color:"#FFF", marginLeft: "50px", fontSize: "25px"}}>Click</IonLabel>
              </IonCol>
              <IonCol>
              <IonRadio 
                type="radio"
                value="Click"
                checked={this.props.click === "Click"}
              />
              </IonCol>
              <IonCol>
              <IonLabel style={{ color:"#FFF", marginLeft: "50px", fontSize: "25px"}}>Bleep</IonLabel>
              </IonCol>
              <IonCol>
              <IonRadio
                type="radio"
                value="Bleep"
                checked={this.props.click === "Bleep"}
              />
              </IonCol>
              <IonCol>
              <IonLabel style={{ color:"#FFF", marginLeft: "50px", fontSize: "25px"}}>808</IonLabel>
              </IonCol>
              <IonCol>
              <IonRadio
                type="radio"
                value="808"
                checked={this.props.click === "808"}
              />
              </IonCol>
              </IonRow>
              </IonItem>
            </IonRadioGroup>
        </IonList>
        <IonButton style={{color:"#000"}} onClick={() => this.setState({showModal :false})}>Close </IonButton>
      </IonModal>
      <IonLabel style={{color:"#FFF", marginLeft: "10px", alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "25px"}} onClick={() => this.setState({showModal:true})}>Select</IonLabel></IonCol>
              </IonRow>
            </IonMenuToggle>
          </IonContent>
  // </IonMenu>
)}
};
export default Menu;
