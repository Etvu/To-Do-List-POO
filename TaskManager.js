import { Task } from './Task.js';
class TaskManager{
    //Properties
    liste_tache = []

    //constructor
    constructor(){
        this.liste_tache = []
    }
    //getters
    get_tasks(){
        return this.liste_tache
    }
    //setters

    //method
    ajouter_task(titre){
        try{
            const task = new Task(titre)
            this.liste_tache.push(task)
            console.log(this.liste_tache); //debug
            return task
        }catch(e){
            console.log("Message de l'erreur : "+e.message)
        }
    }
    supprimer_task(id){
        try{
            this.liste_tache = this.liste_tache.filter(task => task.id !== id);
            console.log(`Tâche avec l'ID ${id} supprimée.`);
            console.log(this.liste_tache); //debug
        }catch(e){
            console.log("Message de l'erreur : "+e.message)
        }
        
    }
    modifier_task(id, newtitre){
        
        try{
            const task = this.liste_tache.find(task => task.id === id)
            if(task){
                task.titre = newtitre
            }
            else{
                console.log("aucune tache trouvé")
            }
        }catch(e){
            console.log("Message de l'erreur : "+e.message)
        }
    }
}

export { TaskManager };