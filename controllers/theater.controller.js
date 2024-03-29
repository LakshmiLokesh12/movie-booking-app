const Theatre = require("../models/theatre.model");
const Movie = require("../models/movie.model");

/**
 * Create  a new Theatre
 */
exports.createTheatre = async (req, res) => {
    const theatreObject = {
        name: req.body.name,
        city: req.body.city,
        description: req.body.description,
        pinCode: req.body.pinCode

    }

    const theatre = await Theatre.create(theatreObject);
    res.status(201).send(theatre);
}

/**
 * Get the list of all the theaters
 */
exports.getAllTheatres = async (req, res) => {
    const queryObj = {};

    if (req.query.name != undefined) {
        queryObj.name = req.query.name;
    }
    if (req.query.city != undefined) {
        queryObj.city = req.query.city;
    }
    if (req.query.pinCode != undefined) {
        queryObj.pinCode = req.query.pinCode;
    }
    const theatres = await Theatre.find(queryObj);
    res.status(200).send(theatres);
}

/**
 * Get the theatre based on theatre id
 */
exports.getTheatre = async (req, res) => {
    const theatre = await Theatre.findOne({
        _id: req.params.id
    });
    res.status(200).send(theatre);

}

/**
 * Update a theatre
 */
exports.updateTheatre = async (req, res) => {

    const savedTheatre = await Theatre.findOne({ _id: req.params.id });

    if (!savedTheatre) {
        return res.status(400).send({
            message: "Theatre being updated doesn't exist"
        });
    }

    savedTheatre.name = req.body.name != undefined ? req.body.name : savedTheatre.name;
    savedTheatre.description = req.body.description != undefined ? req.body.description : savedTheatre.description;
    savedTheatre.city = req.body.city != undefined ? req.body.city : savedTheatre.city;
    savedTheatre.pinCode = req.body.pinCode != undefined ? req.body.pinCode : savedTheatre.pinCode;
   
    var updatedTheatre = await savedTheatre.save();

    res.status(200).send(updatedTheatre);
}



/**
 * Delete a theatres
 */
exports.deleteTheatre = async (req, res)=>{

    await Theatre.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message: "Successfully deleted theatre with id [ " + req.params.id + " ]"
    });


}
/**
 * Add a movie inside a theatre
 */
exports.addMoviesToATheater = async (req, res) => {

    //validation of tha savedTheatre will be done in the later section as middleware
    const savedTheatre = await Theatre.findOne({ _id: req.params.id });

    //Validation of these movie ids will be done in the later section
    movieIds = req.body.movieIds;

    //Add movieIds to the theatres
    if (req.body.insert) {
        movieIds.forEach(movieId => {
            savedTheatre.movies.push(movieId);
        });
    } else {
        //remove these movies from the theatres
        savedMovieIds = savedTheatre.movies;

        movieIds.forEach(movieId => {
            savedMovieIds = savedMovieIds.filter(smi => smi != movieId);
        });
        savedTheatre.movies = savedMovieIds;
    }


    await savedTheatre.save(); //save in the database
    res.status(200).send(savedTheatre);

}

/**
 * Check if the given movie is running in the given theatre
 */
exports.checkMovieInsideATheatre = async (req, res) => {


    const savedTheatre = await Theatre.findOne({ _id: req.params.theatreId });

    const savedMovie = await Movie.findOne({ _id: req.params.movieId });


    const responseBody = {
        message: savedTheatre.movies.includes(savedMovie._id) ? "Movie is present" : "Movie is not present"
    }
    res.status(200).send(responseBody);
}
