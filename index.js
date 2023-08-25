function sendMail() {
  console.log("staaaarted");
    var params = {
     
      crecharge: document.getElementById("rechargetype").value,
      montant: document.getElementById("montant").value,
      devise: document.getElementById("devise").value,
      recharge1: document.getElementById("recharge01").value,
      recharge2: document.getElementById("recharge02").value,
      recharge3: document.getElementById("recharge03").value,
      recharge4: document.getElementById("recharge04").value,
      recharge5: document.getElementById("recharge05").value,
      email: document.getElementById("email").value,
      
    };
  
    const serviceID = "service_p6xjkwk";
    const templateID = "template_s1kqilp";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("rechargetype").value = "";
          document.getElementById("email").value = "";
          document.getElementById("rechargetype").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }