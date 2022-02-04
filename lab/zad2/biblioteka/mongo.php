<?php
  
//require 'vendor/autoload.php' ;
  
class db {
    private $user = "9kotlowska" ;
    private $pass = "pass9kotlowska";
    private $host = "172.20.44.25";
    private $base = "pomiary";
    private $coll = "pomiary_urzadzen";
    private $conn;
    private $dbase;
    private $collection;
  
  
  
    function __construct() {
        // $this->conn = new Mongo("mongodb://{$this->user}:{$this->pass}@{$this->host}/{$this->base}");
        $this->conn = new MongoDB\Client("mongodb://{$this->user}:{$this->pass}@{$this->host}/{$this->base}");    
        //$this->dbase = $this->conn->selectDB($this->base);
        //$this->collection = $this->dbase->selectCollection($this->coll);
        $this->collection = $this->conn->{$this->base}->{$this->coll};
    }
  
    function select() {
        $cursor = $this->collection->find();
        $table = iterator_to_array($cursor);
        return $table ;
    }
  
    function insert($user) {
        $ret = $this->collection->insertOne($user) ;
        return $ret;
    }
  
    function update($ident,$user,$flag) {
        if ( $flag ) {
            $rec = new MongoDB\BSON\ObjectId($ident);
            $filter = array ( '_id' => $rec );
        } else {
            $filter = array ( 'ident' => $ident );
        }
        $update = array ( '$set' => $user );

        $updresult = $this->collection->updateOne($filter,$update);
        $ret = $updresult->getModifiedCount();
        return $ret;
    }
  
    function delete($ident,$flag) {
        if ( $flag ) {
            $rec = new MongoDB\BSON\ObjectId($ident);
            $filter = array ( '_id' => $rec );
        } else {
            $filter = array ( 'ident' => (int)$ident );
        }

        $delresult = $this->collection->deleteOne($filter);
        $ret = $delresult->getDeletedCount(); 
        //return $ret['n'];
        return $ret;
        }
}
?>
