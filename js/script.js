class Objective {
  constructor() {
    this.id = 1;
    this.arrayObjetive = [];
    this.editId = null;
  }

  save() {
    let objective = this.readData;

    if (this.validComposed(objective)) {
      if (this.editId == null) {
        this.adicionar(objective);
      } else {
        this.atualizar(this.editId, objective);
      }
    }
    this.listTable();
  }

  // listTable() {
  //   let tbody = document.getElementById("tbody");
  //   tbody.innerText = "";

  //   for (let i = 0; i < this.arrayObjetive.length; i++) {
  //     let tr = tbody.insertRow();

  //     let td_id = tr.insertCell();
  //     let td_objective = tr.insertCell();
  //     let td_deadline = tr.insertCell();
  //     let td_actions = tr.insertCell();

  //     td_id.innerText = this.arrayObjetive[i].id;
  //     td_objective.innerText = this.arrayObjetive[i].nomeObjetive;
  //     td_deadline.innerText = this.arrayObjetive[i].deadline;

  //     td_id.classList.add("center");

  //     let imgEdit = document.createElement("img");
  //     imgEdit.src = "assets/edit.svg";
  //     imgEdit.setAttribute(
  //       "onclick",
  //       "objetive.preparaEditacao(" +
  //         JSON.stringify(this.arrayObjetive[i]) +
  //         ")"
  //     );

  //     let imgdelet = document.createElement("img");
  //     imgdelet.src = "assets/delet.svg";
  //     imgdelet.setAttribute(
  //       "onclick",
  //       "objetive.deadline(" + this.arrayObjetive[i].id + ")"
  //     );

  //     td_actions.appendChild(imgEdit);
  //     td_actions.appendChild(imgdelete);

  //     console.log(this.arrayObjetive);
  //   }
  // }

  adicionar(objective) {
    objective.deadline = parseFloat(objective.deadline);
    this.arrayObjetive.push(objective);
    this.id++;
  }

  atualizar(id, objective) {
    for (let i = 0; i < this.arrayObjetive.length; i++) {
      if (this.arrayObjetive[i].id == id) {
        this.arrayObjetive[i].nomeObjetive = objective.nomeObjetive;
        this.arrayObjetive[i].deadline = objective.deadline;
      }
    }
  }

  readData() {
    let objective = {};

    objective.id = this.id;
    objective.nomeObjetive = document.getElementById("objective").value;
    objective.deadline = document.getElementById("deadline").value;

    return objective;
  }

  validComposed(objective) {
    let msg = "";

    if (objective.nomeObjetive == "") {
      msg += " - Enter the name of the objective! \n";
    }
    if (objective.deadline == "") {
      msg += " - Enter the deadline for the objective! \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }

  // cancel() {
  //   document.getElementById("objective").value = "";
  //   document.getElementById("deadline").value = "";

  //   document.getElementById("btn1").innerText = "save";
  //   this.editId = null;
  // }
}

var objective = new Objective();
