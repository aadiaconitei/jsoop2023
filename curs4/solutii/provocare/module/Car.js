class Car {
 
    constructor(){
        //private 
      this.#model = '';
    }
   
    //the public access modifier allows the access to the method from outside the class
    setModel(model)
    {
      //validate that only certain car models are assigned to the $carModel property
      let allowedModels = ["Mercedes benz","BMW"];
      if(allowedModels.includes(model))
         this.#model = model;
      else
         this.#model = "not in our list of models.";
    }
    
    getModel()
    {
      return "The car model is " + this.#model;
    }
  }
   
   
//   let mercedes = new Car();
//   //Sets the car model
//   mercedes.setModel("Mercedes benz");
//   //Gets the car model
//   console.log(mercedes.getModel());
  