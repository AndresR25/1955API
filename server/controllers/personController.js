const {PersonModel} = require( '../models/person' );

const PersonController = {
    getAll : function( req, res ){
        PersonModel
        .getPeople()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err))    
    },
    createPerson : function( req, res ){
        let name= req.params.name;
        if(name==undefined || name.length <1){
            let error= new Error('You must add a name');
            res.status(404).json(error.message)
        }

        else{
        
        let person={name:name}
        PersonModel
        .createPerson(person)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err.message))}
    },
    removePerson : function( req, res ){
        let name= req.params.name;
        if(name.length <1){
            let message= 'You must add a name';
            res.status(404).json(message)
        }
        
        let person={name:name}
        PersonModel
        .remove(person)
        .then(data => {
            if(data==null){
                throw new Error('That person doesn"t exists')
            }
            res.status(200).json(data)})
        .catch(err => res.status(404).json(err.message))
    },
    getPerson : function( req, res ){
        
        let name= req.params.name;
        if(name.length <1){
            let message= 'You must add a name';
            res.status(404).json(message)
        }
        
        let person={name:name}
        PersonModel
        .getPerson(person)
        .then(data => {
            if(data==null){
                throw new Error('That person doesn"t exists')
            }
            res.status(200).json(data)})
        .catch(err => res.status(404).json(err.message))
    }
}


module.exports = { PersonController };