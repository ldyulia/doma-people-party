import firebase from "firebase";

export const dataSubmit = (uid, fieldName, data) => {
  firebase
    .database()
    .ref(`Users/${uid}/${fieldName}`)
    .update(data, function(error) {
      if (error) {
        alert(error);
        window.location.reload();
      } else {
        console.log("save to user data success");

        firebase
          .database()
          .ref(fieldName)
          .update(data, function(error) {
            if (error) {
              alert(error);
              window.location.reload();
            } else {
              console.log("save to list data success");
              alert("Request Success");
              // window.location.reload();
            }
          });
      }
    });
};
