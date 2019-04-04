function update() {
  let url;
  switch (location.hash) {
  case "#1del":
    var delConfirm; // Should be let after debugging.
    console.log("FEE");
    delConfirm = dialog("Weet je zeker dat je het document wilt verwijderen?");
    break;
  case "#2del":
    var delConfirm; // Should be let after debugging.
    delConfirm = dialog("Weet je zeker dat je het document wilt verwijderen?");
    break;
  }
}
