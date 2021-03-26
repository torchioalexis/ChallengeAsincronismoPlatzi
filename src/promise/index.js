const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve ('Heeeey!');
        }
        else {
            reject ('Whoops!');
        }
    });
};

somethingWillHappen ()
    .then(response => console.log (response))
    .catch(err => console.error(err));