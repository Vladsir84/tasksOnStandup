export let user = {
    firstName: 'Tom',
    lastName: 'Ford',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    },
    
    setFullName(fullName) {
        
        // const [firstName, lastName] = fullName.split(' ');
        //  this.firstName = firstName;
        //  this.lastName = lastName
             
        
         this.firstName = fullName.split(' ')[0]; 
         this.lastName = fullName.split(' ')[1];  
        
        //  console.log(fullName.split(' '));
    }
};

// user.getFullName();

// user.setFullName('Jack Daniels');

