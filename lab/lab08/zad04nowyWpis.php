<?php

function __autoload($class_name) {
    include $class_name . '.php';
}

$user = new Register_new;

$note = new Note;

if ($user->_is_logged()) {
  $note->_read();
  $note->_save_messages();
  echo "Zapisano";
  echo "<p><a href='zad04listaWpisow.php'>Zobacz wszystkie notatki</a></p>";
  echo "<p><a href='zad04.php'>Powrot do programu glownego</a></p>";
}
?>
