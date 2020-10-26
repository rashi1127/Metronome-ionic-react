import React, { Component, useState } from "react";
import {IonContent, IonModal, IonButton,IonSplitPane, IonList, IonRadioGroup,IonItem, IonRadio, IonMenuToggle, IonHeader, IonMenu,IonTitle,IonLabel,IonToolbar, IonIcon, IonRow, IonCol } from '@ionic/react';
import note from '../img/note.svg';
import setting from '../img/setting.png';
import "./modal.scss";

// export const ModalExample: React.FC = () => {
//     const [showModal, setShowModal] = useState(false); <img  id="header_logo"  src={setting} />
class ModalExample extends React.Component {
    constructor(props){
      super(props)
      this.state={
        showModal:false
      }
    }
    
  render(){
  const {showModal}=this.state;

return(
    <IonItem>
<IonModal isOpen={showModal} cssClass='my-custom-class' className="vedix">
{/* <IonButton onClick={() => this.setState({showModal:true})}><img  id="header_logo"  src={setting} /></IonButton> */}
                <IonList>
          <IonRadioGroup value={this.props.click} onIonChange={(e)=>this.props.handleChange(e)}>
            {/* <IonLabel style={{ color:"#FFF", marginLeft: "50px", alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "30px"}}>{this.props.click}</IonLabel> */}
            <IonLabel style={{ backgroundColor:"#55C1A2",color:"#000",  alignItems: "center",justifyContent:"center", display:"flex" ,fontSize: "30px"}}>Timber <img  id="header_logo" height="35" marginLeft="20px" src={note} /></IonLabel>
            <IonItem>
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
              </IonRow>
              </IonItem>
              <IonItem>
              <IonRow style={{display:"flex",alignItems:'center',justifyContent:"center",width:"100%"}}>
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
              </IonRow>
              </IonItem>
              <IonItem>
              <IonRow style={{display:"flex",alignItems:'center',justifyContent:"center",width:"100%"}}>
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
        <IonButton style={{color:"#000",maxWidth:"800px", margin:"0 auto", marginBottom:"10px"}} onClick={() => this.setState({showModal :false})}>Close </IonButton>
      </IonModal>
      <IonLabel onClick={() => this.setState({showModal:showModal?false:true})}><img  id="header_logo" style={{marginTop:"10px",height:"40px"}} src={setting} /></IonLabel>
      </IonItem>
)};
}
  export default ModalExample;