import{r as s,c as t,h as a,g as r}from"./p-45e5d0c1.js";import{U as i}from"./p-82de3962.js";import{u as o}from"./p-e282851d.js";function e(){return{"mdc-dialog__container":!0}}let l=class{constructor(a){s(this,a),this.uniDialogContainerInitialized=t(this,"uniDialogContainerInitialized",7)}render(){return i({classes:{"mdc-dialog__container":!0}},a("slot",null))}componentDidLoad(){o("mat"),this.uniDialogContainerInitialized.emit(this.el)}get el(){return r(this)}};function n(){return{"mdc-dialog__scrim":!0}}let c=class{constructor(t){s(this,t)}render(){return i({classes:{"mdc-dialog__scrim":!0}},a("slot",null))}componentDidLoad(){o("mat")}};function d(){return{"mdc-dialog__surface":!0}}let u=class{constructor(t){s(this,t),this.role="dialog",this.modal="true",this.labelled="uni-dialog-title",this.described="uni-dialog-content"}render(){const{role:s,modal:t,labelled:r,described:o}=this;return i({props:{role:s,"aria-modal":t,"aria-labelledby":r,"aria-describedby":o},classes:{"mdc-dialog__surface":!0}},a("slot",null))}componentDidLoad(){o("mat")}};export{l as U,c as a,u as b,n as c,d,e as u}