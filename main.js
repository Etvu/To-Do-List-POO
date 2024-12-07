import { TaskManager } from './TaskManager.js';
import { Task } from './Task.js';
const TACHE = new TaskManager()

let container_task = document.querySelector(".task")
let input = document.querySelector(".input_task")
let button = document.getElementById("button_task")
button.addEventListener("click", ()=>{
    let taskTitle = input.value.trim();  // Récupère le titre de la tâche
    if (taskTitle) {
        // nouvel tache
        let task = TACHE.ajouter_task(taskTitle);
        // crée la div 
        let task_div = document.createElement("div");
        task_div.textContent = task.titre;  // guetter pour avoir le titre

        // boutton supp
        let delete_button = document.createElement("button");
        delete_button.textContent = "Supprimer";
        // event pour supp
        delete_button.addEventListener("click", () => {
            task_div.classList.add("fade-out"); // anim
            // Supprime la tâche via le TaskManager
            setTimeout(() => { // délai
                TACHE.supprimer_task(task.id);

                task_div.remove();  // supprime du dom
                delete_button.remove(); 
                edit_input.remove();
                save_button.remove();
            }, 1000);
            
        });

        // crée le champ pour modif
        let edit_input = document.createElement("input");
        edit_input.type = "text";
  

        // bouton valider
        let save_button = document.createElement("button");
        save_button.textContent = "Valider";

          // event pour modif
          save_button.addEventListener("click", () => {
            let newTitle = edit_input.value.trim();
            if (newTitle) {
                // Modifie la tâche via TaskManager
                TACHE.modifier_task(task.id, newTitle);
                // Met à jour le titre dans l'élément DOM
                task_div.textContent = newTitle;
                // Remet le champ input et bouton "Valider" hors de la vue
                edit_input.remove();
                save_button.remove();
            }
        });

        // Ajoute les elem dans le conteneur
        container_task.appendChild(task_div);
        container_task.appendChild(delete_button);
        task_div.appendChild(edit_input);
        task_div.appendChild(save_button);

        // cliquer pour mettre en rouge quand c'est fini
        task_div.addEventListener("click", () => {
            if (task_div.style.color === "red") {
                // Si elle est rouge on remet normal
                task_div.style.color = "";
            } else {

                task_div.style.color = "red"; 
            }
        });
        let input = task_div.querySelector("input");  // empeche de se mettre en rouge quand on clique sur le input
        input.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // Vide le champ 
        input.value = "";
        
    }
})

console.log(TACHE.get_tasks());
/*
const task1 = TACHE.ajouter_task("Apprendre JavaScript");
const task2 = TACHE.ajouter_task("Apprendre JavaScript2");
const task3 = TACHE.ajouter_task("Apprendre JavaScript3");
console.log(task1)
console.log(task2)
console.log(task3)

TACHE.supprimer_task(2)
console.log(TACHE.get_tasks());

TACHE.modifier_task(task1.id, "test")
console.log(TACHE.get_tasks());
*/