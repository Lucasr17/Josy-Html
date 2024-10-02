<?php
// Activer l'affichage des erreurs pour le développement
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomPrenom = htmlspecialchars($_POST['nom_prenom']);
    $email = htmlspecialchars($_POST['email']);
    $objet = htmlspecialchars($_POST['objet']);
    $sujet = htmlspecialchars($_POST['sujet']);
    
    $to = "info.josymail@gmail.com";
    $subject = "Nouveau message de contact : " . $objet;
    
    $message = "
    <html>
    <head>
        <title>$objet</title>
    </head>
    <body>
        <p>Nom et Prénom : $nomPrenom</p>
        <p>Adresse e-mail : $email</p>
        <p>Sujet : $sujet</p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Essayer d'envoyer l'email et capturer les erreurs
    try {
        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(['status' => 'success']);
        } else {
            throw new Exception("Failed to send email. Possible issues: invalid email configuration, server restrictions, etc.");
        }
    } catch (Exception $e) {
        $errorMessage = $e->getMessage();
        $errorDetails = error_get_last();
        echo json_encode(['status' => 'error', 'message' => $errorMessage, 'details' => $errorDetails]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
