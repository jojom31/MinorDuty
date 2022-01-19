'use strict';


const db = require('./conn');

class  choreListModel {
    constructor(id, location, title, description, date, amount_paid,  user_id) {
        this.id = id;
        this.location = location;
        this.title = title;
        this.description = description;
        this.date = date;
        this.amount_paid = amount_paid;
        this.user_id = user_id;
        
    }

    static async getChoreList() {
            const response = await db.any(`
            SELECT * FROM chores;`);
            return response

    }
    //static async getChores(provider_id) {
        //const providerAppointmentData = db.one(`
        //SELECT * FROM chores WHERE provider_id = ${provider_id}; `  
        //);
        //return providerAppointmentData
    //}
    static async getUserChores(user_id) {
        const userChoreData = db.one(`
        SELECT * FROM chores WHERE id = ${user_id}; `  
        );
        return userChoreData
    }

    static async addChores(location, title, description, date, amount_paid, user_id,) {
        const response = await db.result(`INSERT INTO chores ( location, title, description, date, amount_paid, user_id,) VALUES ($1, $2, $3, $4, $5, $6)`,

        [location, title, description, date, amount_paid, user_id,]
    );
        return response;
    }

    static async changeChores() {
        const response = await db.result(` UPDATE chores SET  = $1
        WHERE id = $2 , 
        
        []`
        );
            return response;
    
    }

    static async deleteChores(id) {
        const response = await db.result(`DELETE FROM chores WHERE id = ${id}`);
        return response;
    }

}
module.exports = choreListModel;