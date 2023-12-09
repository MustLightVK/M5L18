class Artist {
    constructor(name, gender, age, height, famousMovies, awards) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.height = height;
      this.famousMovies = famousMovies;
      this.awards = awards;
    }
  
    infomationOutput() {
      console.log(`Имя: ${this.name}`);
      console.log(`Пол: ${this.gender}`);
      console.log(`Возраст: ${this.age}`);
      console.log(`Рост: ${this.height}`);
      console.log(`Известные фильмы: ${this.famousMovies.join(', ')}`);
      console.log(`Награды: ${this.awards.join(', ')}`);
    }
  }
  
  const favoriteActor = new Artist(
    'Чжи Чан Ук', 'Мужской', 36, '182 см', ['Худшее из зол', 'К2 - Телохранитель', 'Хилер'], ["31st Korea's Best Dresser Swan Awards", '4th Asia Artist Awards']
  );
  
  favoriteActor.infomationOutput();
  