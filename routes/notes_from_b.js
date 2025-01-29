var express = require('express');
var router = express.Router();

const cors = require('cors'); //corsミドルウェアの追加

router.use(cors());


 // 接続情報を設定
 const { MongoClient } = require("mongodb");
 const uri = "mongodb+srv://22";
 const client = new MongoClient(uri);

 router.get('/', async (req, res) => {
 // データベース、コレクションを指定
const database = client.db('notes');
 const notes = database.collection('notes');

 // idが１のドキュメントを取得
const note = await notes.find({}).toArray();
 res.json(note);
 })

 module.exports = router;