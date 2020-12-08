import('./styles.scss')

class Car {
  constructor(name) {
    this.name = name
  }

  print(){
    console.log(this.name)
  }
}


const mers = new Car('mers')
mers.print()

const bmw = new Car('bmw')
bmw.print()
