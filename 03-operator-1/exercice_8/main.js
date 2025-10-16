


/**
 * Gestion de budget mensuel ultra-simplifiée (Tâches 1 à 12).
 */
function gererBudgetMinimaliste() {
    // Tâches 1 & 5 (Initialisation)
    let salaireMensuel = 500;
    let autresDepenses = 50;

    // Tâches 2, 3, 4, 5 (Calculs de base)
    const loyer = salaireMensuel * 0.30;
    const nourriture = salaireMensuel * 0.20;
    const transport = salaireMensuel * 0.10;
    autresDepenses += 25; // 75

    // Tâche 9 (Ajout de loisirs)
    const loisirs = salaireMensuel * 0.15; // 75

    // Rassemblement des dépenses pour la boucle
    let depenses = {
        loyer: loyer,
        nourriture: nourriture,
        transport: transport,
        autresDepenses: autresDepenses,
        loisirs: loisirs
    };

    // Tâches 6 & 9 (Calcul du Total et du Reste via boucle)
    let totalDepenses = 0;
    for (const categorie in depenses) {
        totalDepenses += depenses[categorie]; // Somme de 150+100+50+75+75 = 450
    }
    let reste = salaireMensuel - totalDepenses; // 500 - 450 = 50

    console.log("--- Bilan Initial (Tâches 1-7, 9) ---");
    console.log(`Salaire: ${salaireMensuel}`);
    console.log(`Total Dépenses: ${totalDepenses}`);
    console.log(`Reste: ${reste}`);

    // Tâche 8 (Condition sur le reste)
    console.log("\n--- Tâche 8 : Vérification du Reste ---");
    console.log(reste >= 100 ? "Budget bien géré" : "Attention, budget serré");

    // Tâche 10 (Pourcentages avec boucle)
    console.log("\n--- Tâche 10 : Pourcentages ---");
    for (const categorie in depenses) {
        const pourcentage = (depenses[categorie] / salaireMensuel) * 100;
        // On utilise la boucle comme demandé
        console.log(`${categorie}: ${pourcentage.toFixed(1)}%`);
    }

    // Tâche 11 (Augmentation et Recalcul)
    console.log("\n--- Tâche 11 : Augmentation de 10% ---");
    salaireMensuel *= 1.10; // 550
    const nouveauTotal = (salaireMensuel * 0.30) + (salaireMensuel * 0.20) + (salaireMensuel * 0.10) + autresDepenses + loisirs; // 165 + 110 + 55 + 75 + 75 = 480
    const nouveauReste = salaireMensuel - nouveauTotal; // 550 - 480 = 70

    console.log(`Nouveau Salaire: ${salaireMensuel.toFixed(2)}`);
    console.log(`Nouveau Total Dépenses: ${nouveauTotal.toFixed(2)}`);

    // Tâche 12 (Condition sur le seuil)
    console.log("\n--- Tâche 12 : Seuil de Dépenses ---");
    const seuil = salaireMensuel * 0.90; // 90% de 550 = 495
    if (nouveauTotal > seuil) {
        console.log("Dépenses trop élevées, réduisez vos charges");
    } else {
        console.log("Dépenses acceptables");
    }
}

// Exécution
gererBudgetMinimaliste();

// Exportation du module
module.exports = gererBudgetMinimaliste;