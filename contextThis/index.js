export let user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    },
    setFullName(fullName) {
        // const [firstName, lastName] = fullName.split(' ');
        
         this.firstName = fullName.split(' ')[0]; 
         this.lastName = fullName.split(' ')[1];  
        //  console.log(fullName.split(' '));

        //  this.firstName = firstName;
        //  this.lastName = lastName
    }
};

// user.getFullName();

// user.setFullName('Jack Daniels');

