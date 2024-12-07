class Task{
    //Properties
    #Titre = ""
    #ID = 0
    
    static lastId = 0;
    //constructor
    constructor(titre){
        this.#Titre = titre
        this.#ID = ++Task.lastId;
    }
    //getters
    get titre() {
        return this.#Titre;
    }
    get id() {
        return this.#ID;
    }
    //setters
    set titre(nouveauTitre) {
        this.#Titre = nouveauTitre;
    }

}

export { Task };