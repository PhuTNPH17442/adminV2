const  axios = require('axios')
const firebase = require("firebase")
  const firebaseConfig ={
    apiKey: "AIzaSyC0ALYEQcMqnXHT-gZyexMdX37HCPdfuAM",
    authDomain: "fpoly-friend.firebaseapp.com",
    databaseURL: "https://fpoly-friend-default-rtdb.firebaseio.com",
    projectId: "fpoly-friend",
    storageBucket: "fpoly-friend.appspot.com",
    messagingSenderId: "475753837744",
    appId: "1:475753837744:web:5887cf11dca611f1bf7775",
    measurementId: "G-MGVJ00L9LE"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref("user_profile");
const dashboard = (req,res,next)=>{
    res.render('dashboard')
}
const customers = async(req,res,next)=>{
    
        db.get().then((snapshot) => {
          if (snapshot.exists()) {
            //  res.send(snapshot.val());
            const data = snapshot.val();
            const users = Object.values(data);
             res.render('customers',{ users})
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
}
const pieChart = async(req,res,next)=>{
    try {
        // db.get().then((snapshot)=>{
        //     if(snapshot.exists()){
        //        res.status(200).json(snapshot.val())        
        //     }else{
        //         console.log("No data ")
        //     }
        // })
        // ref.once("value",(snapshot)=>{
        //     let countMale = 0 , countFemale = 0;
        //     snapshot.forEach((childSnapshoot)=>{
        //         const user = childSnapshoot.val();
        //         if(user.gender==="male"){
        //             countMale++;
        //         } else if(user.gender === "female"){
        //             countFemale++;
        //         }
        //     })
        //     console.log(user)
        // })
        db.get().then((snapshot)=>{
            if(snapshot.exists()){
                let countMale = 0 , countFemale = 0;
                    snapshot.forEach((childSnapshoot)=>{
                        const user = childSnapshoot.val();
                        if(user.gender==="Nam"){
                            countMale++;
                        } else if(user.gender === "Nữ"){
                            countFemale++;
                        }
                    }) 
               res.status(200).json({countMale,countFemale})
                       
            }else{
                console.log("No data ")
            }
        })
    } catch (error) {
        
    }
}

module.exports={
    dashboard,
    pieChart,
    customers
}