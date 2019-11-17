

<?php
    $ch = curl_init("http://max-scene-classifier.max.us-south.containers.appdomain.cloud/model/predict");
    $fp = fopen("/Users/inderdeepbhatia/Desktop/GitRepos/use-deep-learning-in-ibm-cloud-functions/download.jpeg", 'r');
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
?>