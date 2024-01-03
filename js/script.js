class Objective {
  constructor() {
    this.id = 1;
    this.arrayObjective = [];
    this.editId = null;
  }

  save() {
    let objective = this.readData();

    if (this.validComposed(objective)) {
      if (this.editId == null) {
        this.inset(objective);
      } else {
        this.update(this.editId, objective);
      }
    }
    this.listTable();
    this.cancel();
  }

  inset(objective) {
    this.arrayObjective.push(objective);
    this.id++;
  }

  update(id, objective) {
    for (let i = 0; i < this.arrayObjective.length; i++) {
      if (this.arrayObjective[i].id == id) {
        this.arrayObjective[i].nomeObjective = objective.nomeObjective;
        this.arrayObjective[i].deadline = objective.deadline;
      }
    }
  }

  readData() {
    let objective = {};

    objective.id = this.id;
    objective.nomeObjective = document.getElementById("objective").value;
    objective.deadline = document.getElementById("deadline").value;

    return objective;
  }

  listTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayObjective.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_objective = tr.insertCell();
      let td_deadline = tr.insertCell();
      let td_actions = tr.insertCell();

      td_id.innerText = this.arrayObjective[i].id;
      td_objective.innerText = this.arrayObjective[i].nomeObjective;
      td_deadline.innerText = this.arrayObjective[i].deadline;

      td_id.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "img/edit.svg";
      imgEdit.setAttribute(
        "onclick",
        "objective.prepareEdit(" + JSON.stringify(this.arrayObjective[i]) + ")"
      );

      let imgDelet = document.createElement("img");
      imgDelet.src = "img/delet.svg";
      imgDelet.setAttribute(
        "onclick",
        "objective.delet(" + this.arrayObjective[i].id + ")"
      );

      td_actions.appendChild(imgEdit);
      td_actions.appendChild(imgDelet);
    }
  }

  delet(id) {
    if (confirm("Do you want to delete the objective from the ID " + id)) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.arrayObjective.length; i++) {
        if (this.arrayObjective[i].id == id) {
          this.arrayObjective.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }

  prepareEdit(dados) {
    this.editId = dados.id;

    document.getElementById("objective").value = dados.nomeObjective;
    document.getElementById("deadline").value = dados.deadline;
    document.getElementById("btn1").innerText = "To update";
  }

  validComposed(objective) {
    let msg = "";

    if (objective.nomeObjective == "") {
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

  cancel() {
    document.getElementById("objective").value = "";
    document.getElementById("deadline").value = "";

    document.getElementById("btn1").innerText = "Save";
    this.editId = null;
  }
}

var objective = new Objective();
