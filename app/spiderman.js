class Spiderman{
    constructor(name, age, actor, num_movies, studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.num_movies = num_movies
        this.studio = studio
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.studio} studio`
    }

}

module.exports = Spiderman

