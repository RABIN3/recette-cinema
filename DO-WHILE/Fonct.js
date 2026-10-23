
function addition(a, b) {
    // Validation des paramètres
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Les paramètres doivent être des nombres.");
    }
    return a + b;
}

// Exemple d'utilisation avec gestion des erreurs
try {
    let resultat = addition(5, 7);
    console.log(`La somme est : ${resultat}`); // Affiche : La somme est : 12
} catch (error) {
    console.error("Erreur :", error.message);
}


