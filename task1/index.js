export let user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    },
    
    setFullName(value) {
        // const [firstName, lastName] = fullName.split(' ');
        
        let split = value.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
        
        
        //  this.firstName = fullName.split(' ')[0]; 
        //  this.lastName = fullName.split(' ')[1];  
        //  console.log(fullName.split(' '));

        //  this.firstName = firstName;
        //  this.lastName = lastName
    }
};

// user.getFullName();

// user.setFullName('Jack Daniels');

