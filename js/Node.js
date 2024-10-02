const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Route pour charger les données JSON
app.get('/get-json', (req, res) => {
    fs.readFile('../motsJOSY.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors du chargement du fichier JSON');
        }
        res.json(JSON.parse(data)); // Envoie les données JSON au frontend
    });
});

// Route pour mettre à jour le fichier JSON
app.post('/update-json', (req, res) => {
    const updatedData = req.body;

    fs.writeFile('../motsJOSY.json', JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la sauvegarde du fichier JSON');
        }
        res.json({ message: 'Fichier JSON mis à jour avec succès' });
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

