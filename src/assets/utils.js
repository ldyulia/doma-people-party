import firebase from "firebase";

export const dataSubmit = (uid, fieldName, data) => {
  // console.log(uid, data);
  firebase
    .database()
    .ref(`Users/${uid}/${fieldName}`)
    .update(data, function(error) {
      if (error) {
        alert(error);
        window.location.reload();
      } else {
        console.log("save to firebase success");

        firebase
          .database()
          .ref(fieldName)
          .update(data, function(error) {
            if (error) {
              alert(error);
              window.location.reload();
            } else {
              console.log("save to firebase success");
              alert("Request Success");
              window.location.reload();
            }
          });
      }
    });
};
